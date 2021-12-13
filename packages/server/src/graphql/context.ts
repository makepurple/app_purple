import type { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken, JWT } from "next-auth/jwt";
import { prisma } from "../db";
import { redis } from "../redis";
import { aws, cloudinary, octokit } from "../services";

export interface ServerContextUser {
	id: string;
	email: string;
	name: string;
}

export interface ServerContext {
	aws: typeof aws;
	cloudinary: typeof cloudinary;
	jwt: Maybe<JWT>;
	octokit: ReturnType<typeof octokit["client"]["graphql"]>;
	prisma: PrismaClient;
	redis: typeof redis;
	req: NextApiRequest;
	res: NextApiResponse;
	user: Maybe<ServerContextUser>;
}

interface CreateContextParams {
	req: NextApiRequest;
	res: NextApiResponse;
}

export const createContext = async (params: CreateContextParams): Promise<ServerContext> => {
	const { req, res } = params;

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const jwt = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });

	return {
		aws,
		cloudinary,
		jwt,
		octokit: octokit.client.graphql(jwt?.accessToken),
		prisma,
		redis,
		req,
		res,
		user: jwt && {
			id: jwt.sub,
			name: jwt.name,
			email: jwt.email
		}
	};
};
