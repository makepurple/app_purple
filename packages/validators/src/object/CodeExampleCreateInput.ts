import { CodeLanguage } from "@prisma/client";
import Schema, { array, string } from "computed-types";
import { CodeExampleTitle } from "../string";
import { SkillWhereUniqueInput } from "./SkillWhereUniqueInput";

export const CodeExampleCreateInput = Schema({
	content: string.trim().error("Required").min(12).max(3_000),
	description: string.trim().max(512).strictOptional(),
	language: Schema.enum(CodeLanguage, "Unsupported language"),
	primarySkill: SkillWhereUniqueInput.strictOptional(),
	skills: array.of(SkillWhereUniqueInput).min(1, "Required").max(5, "Maximum of 5 allowed"),
	title: CodeExampleTitle
});
