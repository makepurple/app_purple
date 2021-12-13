import { UrlUtils } from "@makepurple/utils";
import { string } from "computed-types";

export const CloudinaryUrl = string.test(
	(value) =>
		value === "" ||
		(UrlUtils.isImage(value) &&
			(UrlUtils.isRelative(value) || value.startsWith("https://res.cloudinary.com/"))),
	"Invalid URL"
);
