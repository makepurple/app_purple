import type { NextApiRequest, NextApiResponse } from "next";

export const makeContext = async (params: {
	req: NextApiRequest;
	res: NextApiResponse;
}): Promise<any> => {
	const { req, res } = params;

	return Promise.resolve({
		req,
		res
	});
};
