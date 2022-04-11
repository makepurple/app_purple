import type { NextApiRequest, NextApiResponse } from "next";

export interface CreateContextParams {
	req: NextApiRequest;
	res: NextApiResponse;
}

export const createContext2 = (params: CreateContextParams) => {
	const { req, res } = params;

	return {
		req,
		res
	};
};
