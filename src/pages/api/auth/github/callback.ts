import { passport } from "@/server/authentication";
import { apiBaseMiddleware } from "@/server/middlewares";
import { NextApiResponse } from "next";

const handler = apiBaseMiddleware()
	.use(passport.authenticate("github"))
	.use((__, res: NextApiResponse) => {
		res.redirect("/auth/success");
	});

export default handler;
