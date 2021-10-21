import { prisma } from "@/server/db";
import { redis } from "@/server/redis";
import { aws, cloudinary, octokit } from "@/server/services";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/client";

export interface ServerContext {
	aws: typeof aws;
	cloudinary: typeof cloudinary;
	octokit: ReturnType<typeof octokit["client"]["graphql"]>;
	prisma: PrismaClient;
	redis: typeof redis;
	req: NextApiRequest;
	res: NextApiResponse;
	user: Session["user"] | null;
}

interface CreateContextParams {
	req: NextApiRequest;
	res: NextApiResponse;
}

export const createContext = async (params: CreateContextParams): Promise<ServerContext> => {
	const { req, res } = params;

	const session = await getSession({ req });

	return Promise.resolve({
		aws,
		cloudinary,
		octokit: octokit.client.graphql(session?.user.accessToken ?? undefined),
		prisma,
		redis,
		req,
		res,
		user: session?.user ?? null
	});
};
