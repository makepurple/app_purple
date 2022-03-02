import { CodeLanguage } from "@prisma/client";
import Schema, { array, string } from "computed-types";
import { CodeExampleTitle } from "../string";
import { SkillWhereUniqueInput } from "./SkillWhereUniqueInput";

export const CodeExampleUpdateInput = Schema({
	content: string.trim().max(3_000, "Max 3,000 character limit").strictOptional(),
	description: string.trim().max(250, "Max 250 character limit").strictOptional(),
	language: Schema.enum(CodeLanguage, "Unsupported language").strictOptional(),
	primarySkill: SkillWhereUniqueInput.strictOptional(),
	skills: array
		.of(SkillWhereUniqueInput)
		.min(1, "Required")
		.max(5, "Maximum of 5 allowed")
		.strictOptional(),
	title: CodeExampleTitle.strictOptional()
});
