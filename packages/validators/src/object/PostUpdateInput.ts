import Schema, { string } from "computed-types";
import { CloudinaryUrl } from "../string/CloudinaryUrl";
import { DocumentEditorValue } from "./DocumentEditorValue";

export const PostUpdateInput = Schema({
	content: DocumentEditorValue.error("Content malformed").strictOptional(),
	description: string.trim().max(140).strictOptional(),
	thumbnailUrl: CloudinaryUrl.optional()
});
