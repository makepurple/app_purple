import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import * as octokit from "../services/octokit";
import * as pusher from "../services/pusher";

export interface CreateContextParams {
	req: NextApiRequest;
	res: NextApiResponse;
}

export const createContext2 = async (params: CreateContextParams): Promise<any> => {
	const { req, res } = params;

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const jwt = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });

	return {
		jwt,
		octokit: await octokit.client.graphql(jwt?.accessToken),
		pusher: pusher.client,
		req,
		res,
		user: jwt && {
			id: jwt.sub,
			name: jwt.name,
			email: jwt.email
		}
	};
};
