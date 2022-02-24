import { inputObjectType } from "nexus";

export const CodeExampleAuthorNameUrlSlugCompoundUniqueInput = inputObjectType({
	name: "CodeExampleAuthorNameUrlSlugCompoundUniqueInput",
	definition: (t) => {
		t.nonNull.string("authorName");
		t.nonNull.string("urlSlug");
	}
});
