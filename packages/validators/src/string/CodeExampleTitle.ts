import { string } from "computed-types";

const reservedWords = ["edit", "new"];

export const CodeExampleTitle = string
	.trim()
	.min(1, "Required")
	.max(128, "128 character limit")
	.test((value) => !reservedWords.includes(value), "Invalid title");
