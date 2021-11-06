import { CloudinaryUrl, PostTitle } from "@/validators/string";
import Schema, { string } from "computed-types";
import { PostContent } from "./PostContent";

export const PostUpdateInput = Schema({
	content: PostContent.error("Content malformed").strictOptional(),
	description: string.strictOptional(),
	thumbnailUrl: CloudinaryUrl.optional(),
	title: PostTitle.strictOptional()
});
