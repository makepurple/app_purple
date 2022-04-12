import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../db";

export const makeContext = async (params: {
	req: NextApiRequest;
	res: NextApiResponse;
}): Promise<any> => {
	const { req, res } = params;

	return await Promise.resolve({
		prisma,
		req,
		res
	});
};
