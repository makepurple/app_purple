import { CodeLanguage } from "@prisma/client";
import Schema, { array, string } from "computed-types";
import { CodeExampleTitle } from "../string";
import { SkillWhereUniqueInput } from "./SkillWhereUniqueInput";

export const CodeExampleCreateInput = Schema({
	content: string
		.trim()
		.error("Required")
		.min(10, "Min 10 character limit")
		.max(2_000, "Max 2,000 character limit"),
	description: string.trim().max(140, "Max 140 character limit").strictOptional(),
	language: Schema.enum(CodeLanguage, "Unsupported language"),
	primarySkill: SkillWhereUniqueInput.strictOptional(),
	skills: array.of(SkillWhereUniqueInput).min(1, "Required").max(5, "Maximum of 5 allowed"),
	title: CodeExampleTitle
});
