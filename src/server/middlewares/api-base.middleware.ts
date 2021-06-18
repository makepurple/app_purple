import { passport } from "@/server/authentication";
import cookieSession from "cookie-session";
import ms from "ms";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { error } from "next/dist/build/output/log";
import { trustProxyMiddleware } from "./trust-proxy.middleware";

export interface Request extends NextApiRequest {
	// Passport adds these to the request object
	logout: () => void;
	user?: Express.User;
	protocol?: string;
}

const COOKIE_SECRET = process.env.COOKIE_SECRET;

/**
 * Create an API route handler with next-connect and all the necessary middlewares
 *
 * @example
 * ```ts
 * export default handler().get((req, res) => { ... })
 * ```
 */
export const apiBaseMiddleware = () => {
	if (!COOKIE_SECRET) throw new Error(`Please add COOKIE_SECRET to your .env.local file!`);

	return (
		nc<Request, NextApiResponse>({
			onError: (err, _, res) => {
				error(err);
				res.status(500).end(err.toString());
			}
		})
			/**
			 * !HACK
			 * @description
			 * In order for authentication to work on Vercel, req.protocol needs to be set
			 * correctly.
			 *
			 * However, Vercel's reverse proxy setup breaks req.protocol, which the custom
			 * trustProxyMiddleware fixes again.
			 * @author David Lee
			 * @date June 7, 2021
			 */
			.use(process.env.VERCEL ? trustProxyMiddleware : (_, __, next) => next())
			.use(
				cookieSession({
					name: "session",
					keys: [COOKIE_SECRET],
					maxAge: ms("30d"),
					// Do not change the lines below, they make cy.auth() work in e2e tests
					secure: process.env.NODE_ENV !== "development" && !process.env.INSECURE_AUTH,
					signed: process.env.NODE_ENV !== "development" && !process.env.INSECURE_AUTH
				})
			)
			.use(passport.initialize())
			.use<Request, NextApiResponse>(passport.session())
	);
};
