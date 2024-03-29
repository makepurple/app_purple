import { inputObjectType } from "nexus";

export const CodeExampleWhereUniqueInput = inputObjectType({
	name: "CodeExampleWhereUniqueInput",
	definition: (t) => {
		t.string("id");
		t.field("authorName_urlSlug", { type: "CodeExampleAuthorNameUrlSlugCompoundUniqueInput" });
	}
});
