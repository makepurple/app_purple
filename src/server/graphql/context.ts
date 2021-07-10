import { prisma } from "@/server/db";
import { Request } from "@/server/middlewares";
import { redis } from "@/server/redis";
import { aws } from "@/server/services";
import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/client";

export interface ServerContext {
	aws: typeof aws;
	prisma: PrismaClient;
	redis: typeof redis;
	req: Request;
	res: NextApiResponse;
	user: Session["user"] | null;
}

interface CreateContextParams {
	req: Request;
	res: NextApiResponse;
}

export const createContext = async (params: CreateContextParams): Promise<ServerContext> => {
	const { req, res } = params;

	const session = await getSession({ req });

	return Promise.resolve({
		aws,
		prisma,
		redis,
		req,
		res,
		user: session?.user ?? null
	});
};
