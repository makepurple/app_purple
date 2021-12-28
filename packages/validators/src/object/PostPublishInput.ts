import Schema, { string } from "computed-types";
import { CloudinaryUrl } from "../string/CloudinaryUrl";
import { PostTitle } from "../string/PostTitle";
import { DocumentEditorValue } from "./DocumentEditorValue";

export const PostPublishInput = Schema({
	content: DocumentEditorValue.error("Content malformed").strictOptional(),
	description: string.trim().max(140).strictOptional(),
	thumbnailUrl: CloudinaryUrl.optional(),
	title: PostTitle.strictOptional()
});
