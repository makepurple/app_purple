import { prisma } from "@/server/db";
import { Request } from "@/server/middlewares";
import { redis } from "@/server/redis";
import { aws } from "@/server/services";
import { PrismaClient, User } from "@prisma/client";
import { NextApiResponse } from "next";

export interface ServerContext {
	aws: typeof aws;
	prisma: PrismaClient;
	redis: typeof redis;
	req: Request;
	res: NextApiResponse;
	user: User | null;
}

interface CreateContextParams {
	req: Request;
	res: NextApiResponse;
}

export const createContext = async (params: CreateContextParams): Promise<ServerContext> => {
	const { req, res } = params;

	return Promise.resolve({
		aws,
		prisma,
		redis,
		req,
		res,
		user: req.user ?? null
	});
};
