import _Redis from "ioredis";

const host: string = process.env.REDIS_HOST ?? "";
const port: number = Number(process.env.REDIS_PORT);
const password: string = process.env.REDIS_PASSWORD ?? "";

export const RedisClient = new _Redis({ host, port, password });

export type Redis = typeof RedisClient;
