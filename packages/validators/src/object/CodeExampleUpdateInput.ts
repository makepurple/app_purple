import { CodeLanguage } from "@prisma/client";
import Schema, { array, string } from "computed-types";
import { SkillWhereUniqueInput } from "./SkillWhereUniqueInput";

export const CodeExampleUpdateInput = Schema({
	content: string.trim().min(12).max(3_000).strictOptional(),
	description: string.trim().max(512, "Max 512 character limit").strictOptional(),
	language: Schema.enum(CodeLanguage, "Unsupported language").strictOptional(),
	primarySkill: SkillWhereUniqueInput.strictOptional(),
	skills: array
		.of(SkillWhereUniqueInput)
		.min(1, "Required")
		.max(5, "Maximum of 5 allowed")
		.strictOptional()
});
