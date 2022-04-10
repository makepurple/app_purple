import Schema, { array, string } from "computed-types";
import { CodeExampleTitle, CodeLanguage } from "../string";
import { SkillWhereUniqueInput } from "./SkillWhereUniqueInput";

export const CodeExampleCreateInput = Schema({
	content: string.trim().error("Required").min(12).max(3_000),
	description: string.trim().max(512).strictOptional(),
	language: CodeLanguage,
	primarySkill: SkillWhereUniqueInput.strictOptional(),
	skills: array.of(SkillWhereUniqueInput).min(1, "Required").max(5, "Maximum of 5 allowed"),
	title: CodeExampleTitle
});
