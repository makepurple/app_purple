import Schema, { array, string } from "computed-types";
import { CloudinaryUrl } from "../string/CloudinaryUrl";
import { PostTitle } from "../string/PostTitle";
import { DocumentEditorValue } from "./DocumentEditorValue";
import { SkillWhereUniqueInput } from "./SkillWhereUniqueInput";

const schema = Schema({
	content: DocumentEditorValue.strictOptional(),
	description: string.trim().max(140).strictOptional(),
	skills: array
		.of(SkillWhereUniqueInput)
		.min(1, "Required")
		.max(8, "Max 8 skill limit")
		.strictOptional(),
	thumbnailUrl: CloudinaryUrl.optional(),
	title: PostTitle.strictOptional()
});

export const PostDraftUpdateInput: typeof schema = schema;
