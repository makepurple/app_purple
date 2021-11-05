import { PostTitle } from "@/validators/string";
import Schema from "computed-types";
import { PostContent } from "./PostContent";

export const PostUpdateInput = Schema({
	content: PostContent,
	title: PostTitle
});
