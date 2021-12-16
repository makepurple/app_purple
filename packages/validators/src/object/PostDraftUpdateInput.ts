import Schema, { string } from "computed-types";
import { CloudinaryUrl } from "../string/CloudinaryUrl";
import { PostTitle } from "../string/PostTitle";
import { DocumentEditorValue } from "./DocumentEditorValue";

const schema = Schema({
	content: DocumentEditorValue.error("Content malformed").strictOptional(),
	description: string.trim().strictOptional(),
	thumbnailUrl: CloudinaryUrl.optional(),
	title: PostTitle.strictOptional()
});

export const PostDraftUpdateInput: typeof schema = schema;
