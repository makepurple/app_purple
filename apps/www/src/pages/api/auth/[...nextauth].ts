import { prisma } from "@makepurple/server/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { UserActivityType } from "@prisma/client";
import produce from "immer";
import type { NextApiHandler } from "next";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { theme } from "twin.macro";

/**
 * TODO
 * @description Find best way to update user's github information including their image and
 * description on prisma
 * @author David Lee
 * @date January 4, 2022
 */
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
		events: {
			signIn: async (params) => {
				const { account, profile, isNewUser } = params;

				if (!profile) return;

				if (isNewUser) {
					await prisma.userActivity.create({
						data: {
							type: UserActivityType.Joined,
							user: { connect: { name: profile.name } }
						}
					});

					return;
				}

				await prisma.user
					.update({
						where: { name: profile.name },
						data: {
							description: profile.description,
							accounts: {
								update: {
									where: {
										provider_providerAccountId: {
											provider: account.provider,
											providerAccountId: account.providerAccountId
										}
									},
									data: {
										access_token: account.access_token
									}
								}
							}
						}
					})
					.catch(() => null);
			}
		},
		providers: [
			GitHubProvider({
				clientId: process.env.GITHUB_CLIENT_ID,
				clientSecret: process.env.GITHUB_CLIENT_SECRET,
				profile: (profile) => {
					return {
						id: profile.id,
						name: profile.login as string,
						description: profile.bio,
						email: profile.email as string,
						image: profile.avatar_url as string
					};
				},
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
