import { inputObjectType } from "nexus";

export const PostWhereUniqueInput = inputObjectType({
	name: "PostWhereUniqueInput",
	definition: (t) => {
		t.string("id");
		t.field("authorName_urlSlug", {
			type: "PostAuthorNameUrlSlugCompoundUniqueInput"
		});
	}
});
