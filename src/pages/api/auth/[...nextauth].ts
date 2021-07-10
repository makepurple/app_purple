import { prisma } from "@/server/db";
import produce from "immer";
import type { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";

const authHandler: NextApiHandler = (req, res) =>
	NextAuth(req, res, {
		providers: [
			Providers.GitHub({
				clientId: process.env.GITHUB_CLIENT_ID,
				clientSecret: process.env.GITHUB_CLIENT_SECRET,
				scope: "public_repo read:user user:email"
			})
		],
		adapter: Adapters.Prisma.Adapter({ prisma }),
		secret: process.env.COOKIE_SECRET,
		callbacks: {
			session: (session, user) =>
				produce(session, (newSession) => {
					session.user.id = user.id as number;

					return newSession;
				})
		}
	});

export default authHandler;
