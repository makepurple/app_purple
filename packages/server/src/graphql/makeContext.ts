import isbot from "isbot";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { getClientIp } from "request-ip";
import { prisma } from "../db";
import { CloudinaryClient } from "../services/cloudinary";
import { GraphCDNClient } from "../services/graphcdn";
import * as octokit from "../services/octokit";
import * as pusher from "../services/pusher";
import { UnsplashClient } from "../services/unsplash";
import type { ServerContext } from "./context";

export const makeContext = async (params: {
	req: NextApiRequest;
	res: NextApiResponse;
}): Promise<ServerContext> => {
	const { req, res } = params;

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const jwt = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });

	return {
		cloudinary: new CloudinaryClient(),
		graphcdn: new GraphCDNClient(),
		ip: isbot(req.headers["user-agent"]) ? null : getClientIp(req),
		jwt,
		octokit: await octokit.client.graphql(jwt?.accessToken),
		prisma,
		pusher: pusher.client,
		req,
		res,
		unsplash: new UnsplashClient(),
		user: jwt && {
			id: jwt.sub,
			name: jwt.name,
			email: jwt.email,
			role: jwt.role
		}
	};
};
