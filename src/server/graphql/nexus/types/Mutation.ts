import { LangUtils } from "@/utils";
import { mutationType } from "nexus";

export const Mutation = mutationType({
	description: "Root mutation type",
	definition: (t) => {
		t.nonNull.boolean("ok", { resolve: () => true });
		t.field("viewer", {
			type: "User",
			resolve: (root, args, { prisma, user }) => {
				return LangUtils.isNil(user?.id)
					? null
					: prisma.user.findUnique({ where: { id: user?.id } });
			}
		});
	}
});
