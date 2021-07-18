import { prisma } from "@/server/db";
import produce from "immer";
import type { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";

const authHandler: NextApiHandler = (req, res) =>
	NextAuth(req, res, {
		providers: [
			{
				...Providers.GitHub({
					clientId: process.env.GITHUB_CLIENT_ID,
					clientSecret: process.env.GITHUB_CLIENT_SECRET,
					scope: "public_repo read:user user:email"
				}),
				profile(profile) {
					return {
						id: profile.id as string,
						name: profile.login as string,
						email: profile.email as string,
						image: profile.avatar_url as string
					};
				}
			}
		],
		adapter: Adapters.Prisma.Adapter({ prisma }),
		secret: process.env.COOKIE_SECRET,
		callbacks: {
			session: async (session, user) => {
				const userAccount = await prisma.account.findUnique({
					where: {
						id: user.id as number
					}
				});

				return produce(session, (newSession) => {
					session.user.id = user.id as number;
					session.user.accessToken = userAccount?.accessToken;

					return newSession;
				});
			}
		}
	});

export default authHandler;
