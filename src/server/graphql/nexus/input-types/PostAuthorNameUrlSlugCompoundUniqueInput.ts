import { inputObjectType } from "nexus";

export const PostAuthorNameUrlSlugCompoundUniqueInput = inputObjectType({
	name: "PostAuthorNameUrlSlugCompoundUniqueInput",
	definition: (t) => {
		t.nonNull.string("authorName");
		t.nonNull.string("urlSlug");
	}
});
