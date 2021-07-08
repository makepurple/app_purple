import { passport } from "@/server/authentication";
import { apiBaseMiddleware } from "@/server/middlewares";

const handler = apiBaseMiddleware().use(
	passport.authenticate("github", {
		scope: ["public_repo", "read:user", "user:email"]
	})
);

export default handler;
