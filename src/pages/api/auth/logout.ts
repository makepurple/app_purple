import { apiBaseMiddleware } from "@/server/middlewares";

const handler = apiBaseMiddleware().get((req, res) => {
	req.logout();
	res.redirect("/");
});

export default handler;
