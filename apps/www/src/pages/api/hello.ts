import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
	console.log("hello world~!");

	return res.json({
		message: "hello world~!"
	});
};
