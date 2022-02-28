import { string } from "computed-types";

const reservedWords = ["edit", "new"];

export const CodeExampleTitle = string
	.trim()
	.min(12, "Must be at least 12 characters")
	.max(100, "100 character limit")
	.test((value) => !reservedWords.includes(value), "Invalid title");
