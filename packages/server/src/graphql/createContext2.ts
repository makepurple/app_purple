import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

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
		req,
		res,
		user: jwt && {
			id: jwt.sub,
			name: jwt.name,
			email: jwt.email
		}
	};
};
