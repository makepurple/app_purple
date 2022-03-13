import Schema from "computed-types";
import { CommentContent } from "./CommentContent";

export const CommentUpdateInput = Schema({
	content: CommentContent.strictOptional()
});
