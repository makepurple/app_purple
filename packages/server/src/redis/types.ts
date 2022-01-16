import { Redis } from "ioredis";

export type RedisService = {
	instance: Redis | null;
};
