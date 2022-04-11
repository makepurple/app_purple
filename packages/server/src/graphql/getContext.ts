import isbot from "isbot";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { getClientIp } from "request-ip";
import { prisma } from "../db";
import { redis } from "../redis";
import * as cloudinary from "../services/cloudinary";
import * as octokit from "../services/octokit";
import * as pusher from "../services/pusher";
import type { ServerContext } from "./context";

export interface CreateContextParams {
	req: NextApiRequest;
	res: NextApiResponse;
}

export const getContext = async (params: CreateContextParams): Promise<ServerContext> => {
	const { req, res } = params;

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const jwt = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });

	return {
		cloudinary: cloudinary.client,
		ip: isbot(req.headers["user-agent"]) ? null : getClientIp(req),
		jwt,
		octokit: await octokit.client.graphql(jwt?.accessToken),
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
