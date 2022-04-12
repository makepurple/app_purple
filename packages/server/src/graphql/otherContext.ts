import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { prisma } from "../db";
import { redis } from "../redis";
import { CloudinaryClient } from "../services/cloudinary";
import * as octokit from "../services/octokit";
import * as pusher from "../services/pusher";

export const makeContext = async (params: {
	req: NextApiRequest;
	res: NextApiResponse;
}): Promise<any> => {
	const { req, res } = params;

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const jwt = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });

	console.log(!!octokit);

	return {
		cloudinary: new CloudinaryClient(),
		jwt,
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
