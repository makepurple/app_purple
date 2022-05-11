import { arg, intArg, list, nonNull, queryField } from "nexus";

export const randomUnsplashImages = queryField("randomUnsplashImages", {
	type: nonNull(list(nonNull("UnsplashImage"))),
	args: {
		limit: intArg(),
		where: arg({ type: "RandomUnsplashImageWhereInput" })
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { unsplash, user }) => {
		if (!user) throw new Error();

		return await unsplash.getRandom({
			count: args.limit ?? undefined,
			query: args.where?.query ?? undefined
		});
	}
});
