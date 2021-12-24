import { ExperienceType } from "@prisma/client";
import Schema, { array, boolean, DateType, number, string } from "computed-types";

export const ExperienceUpdateInput = Schema({
	endDate: Schema.either(
		DateType.optional(),
		Schema({
			month: number.gte(0, "Invalid month").lte(12, "Invalid year"),
			year: number.gte(0, "Invalid year")
		}).optional(),
		boolean.equals(false)
	).optional(),
	highlights: Schema.either(
		array
			.of(string.max(512, "Cannot be longer than 512 characters"))
			.max(8, "Cannot have more than 8 highlights")
			.optional(),
		array
			.of(
				Schema({
					value: string.max(512, "Cannot be longer than 512 characters")
				})
			)
			.max(8, "Cannot have more than 8 highlights")
			.optional()
	),
	location: string.max(255, "Cannot be longer than 255 characters").optional(),
	organizationName: string.max(255, "Cannot be longer than 255 charaters").optional(),
	positionName: string
		.error("Required")
		.max(255, "Cannot be longer than 255 characters")
		.optional(),
	startDate: Schema.either(
		DateType.optional(),
		Schema({
			month: number.gte(0, "Invalid month").lte(12, "Invalid year"),
			year: number.gte(0, "Invalid year")
		}).optional()
	),
	type: Schema.enum(ExperienceType).optional()
});
