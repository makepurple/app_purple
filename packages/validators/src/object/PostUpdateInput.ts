import Schema, { array, string } from "computed-types";
import { CloudinaryUrl } from "../string/CloudinaryUrl";
import { DocumentEditorValue } from "./DocumentEditorValue";
import { SkillWhereUniqueInput } from "./SkillWhereUniqueInput";

export const PostUpdateInput = Schema({
	content: DocumentEditorValue.error("Content malformed").strictOptional(),
	description: string.trim().max(140, "Max 140 character limit").strictOptional(),
	skills: array.of(SkillWhereUniqueInput).min(1, "Required").strictOptional(),
	thumbnailUrl: CloudinaryUrl.optional()
});
