import { CloudinaryUrl, PostTitle } from "@/validators/string";
import Schema, { string } from "computed-types";
import { DocumentEditorValue } from "./DocumentEditorValue";

export const PostUpdateInput = Schema({
	content: DocumentEditorValue.error("Content malformed").strictOptional(),
	description: string.strictOptional(),
	thumbnailUrl: CloudinaryUrl.optional(),
	title: PostTitle.strictOptional()
});
