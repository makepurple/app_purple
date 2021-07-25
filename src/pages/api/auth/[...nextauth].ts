import { prisma } from "@/server/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import produce from "immer";
import type { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const authHandler: NextApiHandler = (req, res) =>
	NextAuth(req, res, {
		providers: [
			Providers.GitHub({
				clientId: process.env.GITHUB_CLIENT_ID,
				clientSecret: process.env.GITHUB_CLIENT_SECRET,
				scope: "public_repo read:user user:email",
				profile: (profile) => ({
					id: (profile.id as number).toString(),
					name: profile.login as string,
					email: profile.email as string,
					image: profile.avatar_url as string
				})
			})
		],
		adapter: PrismaAdapter(prisma),
		secret: process.env.COOKIE_SECRET,
		callbacks: {
			session: async (session, user) => {
				const userAccount = await prisma.account.findFirst({
					where: {
						providerId: "github",
						user: {
							email: user.email as string
						}
					}
				});

				return produce(session, (newSession) => {
					session.user.id = user.id as string;
					session.user.accessToken = userAccount?.accessToken;

					return newSession;
				});
			}
		}
	});

export default authHandler;
