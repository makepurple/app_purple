import { LangUtils } from "@makepurple/utils";
import { queryType } from "nexus";

export const Query = queryType({
	description: "Root query type",
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