import Schema, { array, string } from "computed-types";
import { CloudinaryUrl } from "../string/CloudinaryUrl";
import { PostTitle } from "../string/PostTitle";
import { DocumentEditorValue } from "./DocumentEditorValue";
import { SkillWhereUniqueInput } from "./SkillWhereUniqueInput";

export const PostPublishInput = Schema({
	content: DocumentEditorValue.error("Content malformed"),
	description: string.trim().max(140).strictOptional(),
	skills: array.of(SkillWhereUniqueInput).min(1, "Required"),
	thumbnailUrl: CloudinaryUrl.optional(),
	title: PostTitle
});
