import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
	return res.json({
		message: "hello world~!"
	});
};
