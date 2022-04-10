import Schema, { array, string } from "computed-types";
import { CloudinaryUrl, PostTitle } from "../string";
import { DocumentEditorValue } from "./DocumentEditorValue";
import { SkillWhereUniqueInput } from "./SkillWhereUniqueInput";

const schema = Schema({
	content: DocumentEditorValue.strictOptional(),
	description: string.trim().max(512, "Max 512 character limit").strictOptional(),
	skills: array
		.of(SkillWhereUniqueInput)
		.min(1, "Required")
		.max(8, "Max 8 skill limit")
		.strictOptional(),
	thumbnailUrl: CloudinaryUrl.optional(),
	title: PostTitle.strictOptional()
});

export const PostDraftUpdateInput: typeof schema = schema;
