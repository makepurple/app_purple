import { Comment, Skill, User } from "@prisma/client";
import { stripIndents } from "common-tags";
import { arg, intArg, objectType, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const CodeExample = objectType({
	name: "CodeExample",
	definition: (t) => {
		t.implements("Node");
		t.nonNull.field("author", {
			type: "User",
			resolve: (parent, args, { prisma }) => {
				return prisma.user.findUnique({
					where: {
						name: parent.authorName
					},
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("authorName");
		t.nonNull.field("comments", {
			type: "CommentConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				where: arg({ type: "CommentWhereInput" }),
				orderBy: arg({ type: "CommentOrderByInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<
					Comment,
					{ id: string }
				>(
					(paginationArgs) =>
						prisma.codeExample
							.findUnique({
								where: { id: parent.id }
							})
							.comments({
								...paginationArgs,
								where: {
									...PrismaUtils.nonNull(args.where),
									parent: {
										is: null
									}
								},
								orderBy: PrismaUtils.nonNull(args.orderBy)
							}),
					() =>
						prisma.codeExample
							.findUnique({
								where: { id: parent.id },
								select: {
									_count: { select: { comments: true } }
								}
							})
							.then((result) => result?._count.comments ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.string("content");
		t.nonNull.dateTime("createdAt");
		t.string("description");
		t.nonNull.field("language", { type: "CodeLanguage" });
		t.nonNull.string("languageColor", {
			resolve: (parent) => {
				/**
				 * !HACK
				 * @description Taken from (@link: https://raw.githubusercontent.com/ozh/github-colors/master/colors.json)
				 * @author David Lee
				 * @date February 26, 2022
				 */
				return (
					{
						JavaScript: "#f1e05a",
						TypeScript: "#2b7489",
						HTML: "#e34c26",
						SCSS: "#c6538c",
						GraphQL: "#e10098",
						Python: "#3572A5",
						Go: "#00ADD8",
						SQL: "#e38c00",
						YAML: "#cb171e"
					}[parent.language] ?? "#6366f1"
				);
			}
		});
		t.nonNull.field("primarySkill", {
			type: "Skill",
			resolve: (parent, args, { prisma }) => {
				return prisma.skill.findUnique({
					where: {
						id: parent.primarySkillId
					},
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("primarySkillId");
		t.nonNull.field("skills", {
			type: "SkillConnection",
			args: {
				after: stringArg(),
				before: stringArg(),
				first: intArg(),
				last: intArg(),
				orderBy: arg({ type: "SkillOrderByInput" }),
				where: arg({ type: "SkillWhereInput" })
			},
			resolve: async (parent, args, { prisma }) => {
				const connection = await PrismaUtils.findManyCursorConnection<
					Skill,
					{ id: string }
				>(
					(paginationArgs) =>
						prisma.codeExample
							.findUnique({ where: { id: parent.id } })
							.skills({
								...paginationArgs,
								orderBy: {
									skill: PrismaUtils.nonNull(args.orderBy)
								},
								where: PrismaUtils.nonNull(args.where),
								include: { skill: true }
							})
							.then((items) => items.map((item) => item.skill)),
					() =>
						prisma.skillsOnCodeExamples.count({
							where: {
								codeExample: { id: { equals: parent.id } },
								skill: PrismaUtils.nonNull(args.where)
							}
						}),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.string("title");
		t.nonNull.dateTime("updatedAt");
		t.nonNull.int("upvotes", {
			resolve: async (parent, args, { prisma }) => {
				const groups = await prisma.codeExampleUpvoter.groupBy({
					_count: true,
					by: ["upvote"],
					where: { codeExampleId: parent.id }
				});

				const upvotes = groups.find((group) => group.upvote)?._count ?? 0;
				const downvotes = groups.find((group) => !group.upvote)?._count ?? 0;

				return upvotes - downvotes;
			}
		});
		t.nonNull.field("upvoters", {
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
						prisma.codeExample
							.findUnique({
								where: { id: parent.id }
							})
							.upvoters({
								...paginationArgs,
								where: {
									upvote: true,
									user: PrismaUtils.nonNull(args.where)
								},
								include: { user: true }
							})
							.then((upvoters) => upvoters.map((upvoter) => upvoter.user)),
					() =>
						prisma.codeExample
							.findUnique({
								where: { id: parent.id },
								include: {
									_count: {
										select: {
											upvoters: true
										}
									}
								}
							})
							.then((result) => result?._count.upvoters ?? 0),
					{ ...PrismaUtils.handleRelayConnectionArgs(args) },
					{ ...PrismaUtils.handleRelayCursor() }
				);

				return connection;
			}
		});
		t.nonNull.string("urlSlug");
		t.boolean("viewerUpvote", {
			description: stripIndents`
				How the viwer has voted on this code exmaple.

				true: upvoted
				false: downvoted
				null: didn't vote
			`,
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) return null;

				const codeExampleUpvoter = await prisma.codeExampleUpvoter.findUnique({
					where: {
						codeExampleId_userId: {
							codeExampleId: parent.id,
							userId: user.id
						}
					}
				});

				return codeExampleUpvoter?.upvote ?? null;
			}
		});
	}
});
