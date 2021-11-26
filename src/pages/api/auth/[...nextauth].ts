import { prisma } from "@/server/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import produce from "immer";
import type { NextApiHandler } from "next";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authHandler: NextApiHandler = (req, res) =>
	NextAuth(req, res, {
		providers: [
			GitHubProvider({
				clientId: process.env.GITHUB_CLIENT_ID,
				clientSecret: process.env.GITHUB_CLIENT_SECRET,
				profile: (profile) => ({
					id: (profile.id as number).toString(),
					name: profile.login as string,
					email: profile.email as string,
					image: profile.avatar_url as string
				}),
				authorization: {
					params: {
						scope: "public_repo read:user user:email"
					}
				}
			})
		],
		adapter: PrismaAdapter(prisma),
		secret: process.env.COOKIE_SECRET,
		session: {
			strategy: "jwt"
		},
		callbacks: {
			session: async ({ session, user }) => {
				const userAccount = await prisma.account.findFirst({
					where: {
						providerId: "github",
						user: {
							email: user.email as string
						}
					}
				});

				return produce(session, (newSession) => {
					session.user.id = user.id;
					session.user.accessToken = userAccount?.accessToken;

					return newSession;
				});
			}
		}
	});

export default authHandler;
