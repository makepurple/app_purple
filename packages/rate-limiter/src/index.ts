import { Redis as URedis } from "@upstash/redis";
import { Redis as IORedis } from "ioredis";

export interface RateLimiterOptions {
	db: {
		ioredis?: IORedis;
		upstash?: URedis;
	};
	durationMs: number;
	max: number;
	namespace?: string;
}

export interface RateLimiterGetParams {
	id: string | number;
}

export interface RateLimiterStatus {
	limit: number;
	remaining: number;
	reset: number;
}

interface GetFromStoreParams {
	key: string;
	nowMs: number;
	startMs: number;
}

interface GetFromStoreResult {
	count: number;
	reset: number;
}

export class RateLimiter {
	private ioredis?: IORedis;
	private upstash?: URedis;
	private durationMs: number;
	private max: number;
	private namespace: string;

	constructor(options: RateLimiterOptions) {
		if (options.db.upstash && options.db.ioredis) {
			throw new Error("Must provide only 1 of either upstash or ioredis!");
		}

		if (options.db.upstash) {
			this.upstash = options.db.upstash;
		}

		if (options.db.ioredis) {
			this.ioredis = options.db.ioredis;
		}

		this.durationMs = options.durationMs;
		this.max = options.max;
		this.namespace = options.namespace ?? "limit";
	}

	public async get(params: RateLimiterGetParams) {
		const { id } = params;

		if (!id) throw new Error("Cannot rate limit on an empty id");

		const key = `${this.namespace}:${id}`;
		const nowMs = performance.now();
		const startMs = nowMs - this.durationMs;

		const getParams: GetFromStoreParams = { key, nowMs, startMs };

		const dbResults = this.upstash
			? await this.getWithUpstash(getParams)
			: this.ioredis
			? await this.getWithIORedis(getParams)
			: null;

		if (!dbResults) throw new Error();

		const { count, reset } = dbResults;

		return {
			// X-Rate-Limit-Limit
			// The rate limit ceiling that is applicable for the current request
			limit: this.max,
			/// X-Rate-Limit-Remaining
			// The number of requests left for the current rate-limit window
			remaining: Math.max(0, count < this.max ? this.max - count : 0),
			// X-Rate-Limit-Reset
			// The time at which the rate-limit resets
			reset: Math.floor(reset / 1_000)
		};
	}

	private toNumber(value: Maybe<string | number>): number | null {
		if (value === null) return null;

		if (typeof value === "undefined") return null;
		if (typeof value === "number") return value;

		const parsed = parseInt(value, 10);

		if (Number.isNaN(parsed)) return null;

		return parsed;
	}

	/**
	 * !HACK
	 * @description Upstash's REST API doesn't yet support transactions, which can lead to potential
	 * race-conditions with rate-limiting. Use at your own risk! Prefer using ioredis until
	 * transactions are supported by upstash. Use at your own risk!
	 * @author David Lee
	 * @date April 2, 2022
	 */
	private async getWithUpstash(params: GetFromStoreParams): Promise<GetFromStoreResult> {
		const { key, nowMs, startMs } = params;

		if (!this.upstash) throw new Error("Error rate-limiting with upstash!");

		const res = await this.upstash
			.pipeline()
			.zremrangebyscore(key, 0, startMs)
			.zcard(key)
			.zadd(key, {
				score: nowMs,
				member: `${nowMs}`
			})
			.zrange(key, 0, 0)
			.zrange(key, -this.max, -this.max)
			.zremrangebyrank(key, 0, -(this.max + 1))
			.pexpire(key, this.durationMs)
			.exec<Maybe<{ result?: string | number | undefined }>[]>()
			.then((response) => response?.map((item) => item?.result ?? null) ?? []);

		const durationSecs = this.durationMs / 1_000;

		const count = this.toNumber(res[1]);
		const oldest = this.toNumber(res[3]);
		const oldestInRange = this.toNumber(res[4]);

		const finalOldest = oldestInRange ?? oldest;

		if (typeof count !== "number") throw new Error("Could not get rate-limit remaining");
		if (typeof finalOldest !== "number") throw new Error("Could not get rate-limit reset");

		const reset = finalOldest + durationSecs;

		return { count, reset };
	}

	private async getWithIORedis(params: GetFromStoreParams): Promise<GetFromStoreResult> {
		const { key, nowMs, startMs } = params;

		if (!this.ioredis) throw new Error("Error rate-limiting with ioredis!");

		const res = await this.ioredis
			.multi()
			.zremrangebyscore(key, 0, startMs)
			.zcard(key)
			.zadd(key, nowMs, `${nowMs}`)
			.zrange(key, 0, 0)
			.zrange(key, -this.max, -this.max)
			.zremrangebyrank(key, 0, -(this.max + 1))
			.pexpire(key, this.durationMs)
			.exec()
			.then((response) => {
				if (!response) return [];

				return response.map((item) => {
					if (!item) return null;

					const [, result] = item;

					return (result as Maybe<string | number>) ?? null;
				});
			});

		const durationSecs = this.durationMs / 1_000;

		const count = this.toNumber(res[1]);
		const oldest = this.toNumber(res[3]);
		const oldestInRange = this.toNumber(res[4]);

		const finalOldest = oldestInRange ?? oldest;

		if (typeof count !== "number") throw new Error("Could not get rate-limit remaining");
		if (typeof finalOldest !== "number") throw new Error("Could not get rate-limit reset");

		const reset = finalOldest + durationSecs;

		return { count, reset };
	}
}
