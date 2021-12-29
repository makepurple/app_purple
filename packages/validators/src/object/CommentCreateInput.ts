import Schema from "computed-types";
import { CommentContent } from "./CommentContent";

export const CommentCreateInput = Schema({
	content: CommentContent
});
