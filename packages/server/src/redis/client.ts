import _Redis, { Redis as IORedis } from "ioredis";

const host: string = process.env.REDIS_HOST ?? "";
const port: number = Number(process.env.REDIS_PORT);
const password: string = process.env.REDIS_PASSWORD ?? "";

// Make global.cachedRedis work with TypeScript
declare global {
	// NOTE: This actually needs to be a "var", let/const don't work here.
	// eslint-disable-next-line no-var
	var cachedRedis: IORedis | null;
}

// Workaround to prevent opening more Redis connections during "next dev"
export const RedisClient: IORedis | null =
	process.env.AS_SCRIPT === "true"
		? null
		: global.cachedRedis ?? new _Redis({ host, port, password });

if (process.env.NODE_ENV !== "production") {
	global.cachedRedis = RedisClient;
}

export type Redis = IORedis;
