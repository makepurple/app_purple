import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { prisma } from "../db";
import { redis } from "../redis";
import { cloudinary, octokit, pusher } from "../services";
import { ServerContext } from "./context";

export interface CreateContextParams {
	req: NextApiRequest;
	res: NextApiResponse;
}

export const createContext = async (params: CreateContextParams): Promise<ServerContext> => {
	const { req, res } = params;

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const jwt = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });

	return {
		cloudinary: cloudinary.client,
		jwt,
		octokit: octokit.client.graphql(jwt?.accessToken),
		prisma,
		pusher: pusher.client,
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
