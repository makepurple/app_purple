import { prisma } from "@makepurple/server/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { UserActivityType } from "@prisma/client";
import produce from "immer";
import type { NextApiHandler } from "next";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authHandler: NextApiHandler = (req, res) =>
	NextAuth(req, res, {
		adapter: PrismaAdapter(prisma),
		callbacks: {
			signIn: async ({ user }) => {
				const dbUser = await prisma.user.findUnique({
					where: {
						name: user.name
					}
				});

				if (!dbUser) return false;

				return !dbUser.banned;
			},
			jwt: ({ account, token }) => {
				const accessToken = account?.access_token;

				if (!accessToken) return token;

				return produce(token, (newToken) => {
					token.accessToken = accessToken;

					return newToken;
				});
			},
			session: ({ session, token }) => {
				return produce(session, (newSession) => {
					newSession.accessToken = token.accessToken;

					newSession.user = produce(session.user, (newUser) => {
						newUser.accessToken = token.accessToken;
						newUser.id = token.sub;

						return newUser;
					});

					return newSession;
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
		pages: {
			signIn: "/login",
			signOut: "/signup",
			newUser: "/new-user"
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
						scope: "public_repo read:org read:user user:email user:follow"
					}
				}
			})
		],
		session: {
			strategy: "jwt"
		}
	});

export default authHandler;
