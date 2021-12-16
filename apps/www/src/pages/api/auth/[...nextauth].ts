import { prisma } from "@makepurple/server";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import produce from "immer";
import type { NextApiHandler } from "next";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { theme } from "twin.macro";

const authHandler: NextApiHandler = (req, res) =>
	NextAuth(req, res, {
		adapter: PrismaAdapter(prisma),
		callbacks: {
			jwt: ({ account, token }) => {
				const accessToken = account?.access_token;

				if (!accessToken) return token;

				return produce(token, (newToken) => {
					token.accessToken = accessToken;

					return newToken;
				});
			}
		},
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
		secret: process.env.NEXTAUTH_SECRET,
		session: {
			strategy: "jwt"
		},
		theme: {
			colorScheme: "auto",
			brandColor: theme`colors.indigo.500`
		}
	});

export default authHandler;
