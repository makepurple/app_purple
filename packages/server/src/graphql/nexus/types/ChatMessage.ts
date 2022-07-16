import type { Prisma } from "@prisma/client";
import { objectType } from "nexus";

export const ChatMessage = objectType({
	name: "ChatMessage",
	sourceType: {
		module: "@prisma/client",
		export: "ChatMessage"
	},
	definition: (t) => {
		t.implements("Node");
		t.nonNull.field("chat", {
			type: "Chat",
			resolve: (parent, args, { prisma }) => {
				return prisma.chat.findUniqueOrThrow({
					where: {
						id: parent.chatId
					}
				});
			}
		});
		t.nonNull.string("chatId");
		t.nonNull.list.nonNull.json("content", {
			resolve: (parent) => {
				/**
				 * !HACK
				 * @description The underlying type in the DB is a Json, but we're expecting a
				 * json array. Casting to json[] in the resolver, which may break if the
				 * field ever returns a different data shape
				 * @author David Lee
				 * @date April 3, 2022
				 */
				return parent.content as Prisma.JsonArray[];
			}
		});
		t.nonNull.dateTime("createdAt");
		t.nonNull.field("sender", {
			type: "User",
			resolve: (parent, args, { prisma }) => {
				return prisma.user.findUniqueOrThrow({
					where: {
						id: parent.senderId
					}
				});
			}
		});
		t.nonNull.string("senderId");
	}
});
