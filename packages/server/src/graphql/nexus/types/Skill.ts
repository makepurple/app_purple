import { CodeExample, Post, User } from "@prisma/client";
import { arg, intArg, list, nonNull, objectType, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const Skill = objectType({
	name: "Skill",
	definition: (t) => {
		t.implements("Followable");
		t.implements("WithGitHubRepository");
		t.nonNull.field("codeExamples", {
			type: "CodeExampleConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				orderBy: list(nonNull(arg({ type: "CodeExampleOrderByInput" }))),
				where: arg({ type: "CodeExampleWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<
					CodeExample,
					{ id: string }
				>(
					async ({ cursor, skip, take }) =>
						take === 0
							? await Promise.resolve([])
							: await prisma.skill
									.findUnique({
										where: {
											id: parent.id
										}
									})
									.codeExamples({
										cursor,
										skip,
										take,
										orderBy: args.orderBy?.map((orderBy) => ({
											codeExample: PrismaUtils.nonNull(orderBy)
										})),
										where: {
											codeExample: PrismaUtils.nonNull(args.where)
										},
										include: { codeExample: true }
									})
									.then((items) => items.map((item) => item.codeExample)),
					() =>
						prisma.codeExample.count({
							where: {
								skills: {
									some: { skillId: { equals: parent.id } }
								}
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("desiringUsers", {
			type: "UserConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<User, { id: string }>(
					async ({ cursor, skip, take }) =>
						take === 0
							? await Promise.resolve([])
							: await prisma.skill
									.findUnique({
										where: {
											id: parent.id
										}
									})
									.desiringUsers({
										cursor,
										skip,
										take,
										include: { user: true }
									})
									.then((items) => items.map((item) => item.user)),
					() =>
						prisma.user.count({
							where: {
								desiredSkills: {
									some: { skillId: { equals: parent.id } }
								}
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("followers", {
			type: "UserConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<User, { id: string }>(
					(paginationArgs) =>
						prisma.skill
							.findUnique({
								where: { id: parent.id }
							})
							.followedBy({
								...paginationArgs,
								where: {
									following: { id: { equals: parent.id } },
									follower: PrismaUtils.nonNull(args.where)
								},
								include: { follower: true }
							})
							.then((items) => items.map((item) => item.follower)),
					() =>
						prisma.skill
							.findUnique({
								where: { id: parent.id },
								select: {
									_count: { select: { followedBy: true } }
								}
							})
							.then((result) => result?._count.followedBy ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.int("followersCount", {
			resolve: async (parent, args, { prisma }) => {
				return await prisma.skill
					.findUnique({
						where: { id: parent.id },
						select: {
							_count: { select: { followedBy: true } }
						}
					})
					.then((result) => result?._count.followedBy ?? 0);
			}
		});
		t.implements("Node");
		t.nonNull.field("posts", {
			type: "PostConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "PostWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<Post, { id: string }>(
					(paginationArgs) =>
						prisma.skill
							.findUnique({
								where: { id: parent.id }
							})
							.posts({
								...paginationArgs,
								where: {
									post: {
										...PrismaUtils.nonNull(args.where),
										...(args.where?.skills
											? {
													skills: {
														every: {
															skill: PrismaUtils.nonNull(
																args.where?.skills?.every
															)
														},
														none: {
															skill: PrismaUtils.nonNull(
																args.where?.skills?.none
															)
														},
														some: {
															skill: PrismaUtils.nonNull(
																args.where?.skills?.some
															)
														}
													}
											  }
											: {})
									}
								},
								include: { post: true }
							})
							.then((items) => items.map((item) => item.post)),
					() =>
						prisma.skillsOnPosts.count({
							where: {
								skill: { id: { equals: parent.id } },
								post: PrismaUtils.nonNull(args.where)
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.field("users", {
			type: "UserConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "UserWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<User, { id: string }>(
					async ({ cursor, skip, take }) =>
						take === 0
							? await Promise.resolve([])
							: await prisma.skill
									.findUnique({
										where: {
											id: parent.id
										}
									})
									.users({
										cursor,
										skip,
										take,
										include: { user: true }
									})
									.then((items) => items.map((item) => item.user)),
					() =>
						prisma.user.count({
							where: {
								skills: {
									some: { skillId: { equals: parent.id } }
								}
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.boolean("viewerDesiredSkill", {
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) return false;

				return await prisma.desiredSkillsOnUsers
					.findUnique({
						where: {
							skillId_userId: {
								skillId: parent.id,
								userId: user.id
							}
						}
					})
					.then((result) => !!result)
					.catch(() => false);
			}
		});
		t.nonNull.boolean("viewerFollowing", {
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) return false;

				const follow = await prisma.followSkill.findUnique({
					where: {
						followerId_followingId: {
							followerId: user.id,
							followingId: parent.id
						}
					}
				});

				return !!follow;
			}
		});
		t.nonNull.boolean("viewerSkill", {
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) return false;

				return await prisma.skillsOnUsers
					.findUnique({
						where: {
							skillId_userId: {
								skillId: parent.id,
								userId: user.id
							}
						}
					})
					.then((result) => !!result)
					.catch(() => false);
			}
		});
	}
});
