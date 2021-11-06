import { UrlUtils } from "@/utils";
import { string } from "computed-types";

export const CloudinaryUrl = string.test(
	(value) => UrlUtils.isImage(value) && value.startsWith("https://res.cloudinary.com/"),
	"Invalid URL"
);
