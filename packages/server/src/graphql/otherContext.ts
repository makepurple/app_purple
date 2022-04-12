import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { prisma } from "../db";

export const makeContext = async (params: {
	req: NextApiRequest;
	res: NextApiResponse;
}): Promise<any> => {
	const { req, res } = params;

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const jwt = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });

	return {
		jwt,
		prisma,
		req,
		res,
		user: jwt && {
			id: jwt.sub,
			name: jwt.name,
			email: jwt.email
		}
	};
};
