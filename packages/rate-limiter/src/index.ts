import { Redis } from "ioredis";

export interface RateLimiterOptions {
	db: Redis;
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

export class RateLimiter {
	private db: Redis;
	private durationMs: number;
	private max: number;
	private namespace: string;

	constructor(options: RateLimiterOptions) {
		this.db = options.db;
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

		const res = (await this.db
			.multi()
			.zremrangebyscore(key, 0, startMs)
			.zcard(key)
			.zadd(key, nowMs, nowMs)
			.zrange(key, 0, 0)
			.zrange(key, -this.max, -this.max)
			.zremrangebyrank(key, 0, -(this.max + 1))
			.pexpire(key, this.durationMs)
			.exec()) as readonly [error: Error, result: string][];

		const durationSecs = this.durationMs / 1_000;

		console.log(res);

		const count = parseInt(res[1][1]);
		const oldest = parseInt(res[3][1]);
		const oldestInRange = parseInt(res[4][1]);
		const reset = (Number.isNaN(oldestInRange) ? oldest : oldestInRange) + durationSecs;

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
}
