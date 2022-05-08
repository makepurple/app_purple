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
					},
					select: {
						banReason: { select: { id: true } }
					}
				});

				if (!dbUser) return false;

				return !dbUser.banReason;
			},
			jwt: async ({ account, token }) => {
				const dbUser = await prisma.user.findUnique({
					where: {
						name: token.name
					},
					rejectOnNotFound: true
				});

				const accessToken = account?.access_token;

				if (!accessToken) return token;

				return produce(token, (newToken) => {
					newToken.accessToken = accessToken;
					newToken.role = dbUser.role;

					return newToken;
				});
			},
			session: ({ session, token }) => {
				return produce(session, (newSession) => {
					newSession.accessToken = token.accessToken;

					newSession.user = produce(session.user, (newUser) => {
						newUser.accessToken = token.accessToken;
						newUser.id = token.sub;
						newUser.role = token.role;

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
		},
		...(process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
			? {
					cookies: {
						sessionToken: {
							name: "__Secure-next-auth.session-token",
							options: {
								// The default would be the exact domain. We also want to allow passing
								// credentials with requests to the `graphcdn` subdomain, so we make
								// this cookie readable for all subdomains.
								// Note that this is only relevant for the production deployment. When
								// developing on localhost, no domain needs to be set.
								domain: `.${process.env.NEXTAUTH_URL}`,
								httpOnly: true,
								path: "/",
								sameSite: "lax",
								secure: true
							}
						}
					}
			  }
			: {})
	});

export default authHandler;
