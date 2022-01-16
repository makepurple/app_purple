import { RedisClient } from "./client";
import { RedisService } from "./types";

export const redis: RedisService = {
	instance: RedisClient
};
