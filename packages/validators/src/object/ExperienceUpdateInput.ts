import Schema, { array, boolean, DateType, number, string } from "computed-types";
import { ExperienceType } from "../string";

export const ExperienceUpdateInput = Schema({
	endDate: Schema.either(
		DateType,
		Schema({
			month: number.gte(0, "Invalid month").lte(12, "Invalid year"),
			year: number.gte(0, "Invalid year")
		}),
		boolean.equals(false)
	).strictOptional(),
	highlights: Schema.either(
		array
			.of(string.max(512, "Cannot be longer than 512 characters"))
			.max(8, "Cannot have more than 8 highlights")
			.strictOptional(),
		array
			.of(
				Schema({
					value: string.max(512, "Cannot be longer than 512 characters")
				})
			)
			.max(8, "Cannot have more than 8 highlights")
			.strictOptional()
	),
	location: string.max(256, "Cannot be longer than 256 characters").strictOptional(),
	organizationName: string.max(256, "Cannot be longer than 256 charaters").strictOptional(),
	positionName: string
		.error("Required")
		.max(256, "Cannot be longer than 256 characters")
		.strictOptional(),
	startDate: Schema.either(
		DateType,
		Schema({
			month: number.gte(0, "Invalid month").lte(12, "Invalid year"),
			year: number.gte(0, "Invalid year")
		})
	).strictOptional(),
	type: ExperienceType.optional()
});
