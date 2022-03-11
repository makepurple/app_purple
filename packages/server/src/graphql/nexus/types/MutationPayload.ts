import { interfaceType } from "nexus";
import { PrismaUtils } from "../../../utils";

export const MutationPayload = interfaceType({
	name: "MutationPayload",
	definition: (t) => {
		t.nonNull.string("cursor", {
			resolve: (parent) => {
				return (
					PrismaUtils.handleRelayCursor().encodeCursor?.(parent.record as any) ??
					parent.record?.id ??
					""
				);
			}
		});
		t.nonNull.field("query", {
			type: "Query",
			resolve: () => ({})
		});
		t.nonNull.field("record", {
			type: "Node",
			resolve: (parent) => {
				return parent.record as any;
			}
		});
		t.field("viewer", {
			type: "User",
			resolve: async (parent, args, { prisma, user }) => {
				if (!user) return null;

				return await prisma.user.findUnique({
					where: {
						id: user.id
					}
				});
			}
		});
	}
});
