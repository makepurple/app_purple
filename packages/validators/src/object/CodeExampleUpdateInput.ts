import { CodeLanguage } from "@prisma/client";
import Schema, { array, string } from "computed-types";
import { CodeExampleTitle } from "../string";
import { SkillWhereUniqueInput } from "./SkillWhereUniqueInput";

export const CodeExampleUpdateInput = Schema({
	content: string.trim().max(2_000, "Max 2,000 character limit").strictOptional(),
	description: string.trim().max(140, "Max 140 character limit").strictOptional(),
	language: Schema.enum(CodeLanguage, "Unsupported language").strictOptional(),
	primarySkill: SkillWhereUniqueInput.strictOptional(),
	skills: array
		.of(SkillWhereUniqueInput)
		.min(1, "Required")
		.max(5, "Maximum of 5 allowed")
		.strictOptional(),
	title: CodeExampleTitle.strictOptional()
});
