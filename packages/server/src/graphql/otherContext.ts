import isbot from "isbot";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { getClientIp } from "request-ip";
import { prisma } from "../db";
import { redis } from "../redis";
import { CloudinaryClient } from "../services/cloudinary";
import * as pusher from "../services/pusher";

export const makeContext = async (params: {
	req: NextApiRequest;
	res: NextApiResponse;
}): Promise<any> => {
	const { req, res } = params;

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const jwt = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });

	return {
		cloudinary: new CloudinaryClient(),
		ip: isbot(req.headers["user-agent"]) ? null : getClientIp(req),
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
