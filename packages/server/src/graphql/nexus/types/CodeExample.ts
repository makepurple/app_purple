import { NexusPrisma } from "@makepurple/prisma/nexus";
import { Comment, Skill, User } from "@prisma/client";
import { arg, intArg, objectType, stringArg } from "nexus";
import { PrismaUtils } from "../../../utils";

export const CodeExample = objectType({
	name: NexusPrisma.CodeExample.$name,
	description: NexusPrisma.CodeExample.$description,
	definition: (t) => {
		t.field(NexusPrisma.CodeExample.id);
		t.field(NexusPrisma.CodeExample.author);
		t.field(NexusPrisma.CodeExample.authorName);
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
								where: PrismaUtils.nonNull(args.where),
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
		t.field(NexusPrisma.CodeExample.content);
		t.field(NexusPrisma.CodeExample.createdAt);
		t.field(NexusPrisma.CodeExample.description);
		t.field(NexusPrisma.CodeExample.language);
		t.field(NexusPrisma.CodeExample.primarySkill);
		t.field(NexusPrisma.CodeExample.primarySkillId);
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
		t.field(NexusPrisma.CodeExample.title);
		t.field(NexusPrisma.CodeExample.updatedAt);
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
	}
});
