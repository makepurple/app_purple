import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import { NexusPrisma } from "@makepurple/prisma/nexus";
import { Post, User } from "@prisma/client";
import { arg, intArg, objectType, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const Skill = objectType({
	name: NexusPrisma.Skill.$name,
	description: NexusPrisma.Skill.$description,
	definition: (t) => {
		t.implements("Followable");
		t.implements("WithGitHubRepository");
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
				const connection = await findManyCursorConnection<User, { id: string }>(
					(paginationArgs) =>
						prisma.skill
							.findUnique({
								where: {
									id: parent.id
								}
							})
							.desiringUsers({
								...paginationArgs,
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
		t.field(NexusPrisma.Skill.id);
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
				const connection = await findManyCursorConnection<Post, { id: string }>(
					(paginationArgs) =>
						prisma.skill
							.findUnique({
								where: { id: parent.id }
							})
							.posts({
								...paginationArgs,
								where: {
									post: PrismaUtils.nonNull(args.where)
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
				const connection = await findManyCursorConnection<User, { id: string }>(
					(paginationArgs) =>
						prisma.skill
							.findUnique({
								where: {
									id: parent.id
								}
							})
							.users({
								...paginationArgs,
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
	}
});
