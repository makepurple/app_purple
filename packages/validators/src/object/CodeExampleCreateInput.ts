import { CodeLanguage } from "@prisma/client";
import Schema, { array, string } from "computed-types";
import { SkillWhereUniqueInput } from "./SkillWhereUniqueInput";

export const CodeExampleCreateInput = Schema({
	content: string.trim().max(2_000, "Max 2,000 character limit").error("Required"),
	description: string.trim().max(140, "Max 140 character limit").strictOptional(),
	language: Schema.enum(CodeLanguage, "Unsupported language").error("Required"),
	skills: array.of(SkillWhereUniqueInput).min(1, "Required").error("Required"),
	title: string
		.min(12, "Must be at least 12 characters")
		.max(100, "100 character limit")
		.error("Required")
});
