import { ExperienceType } from "@prisma/client";
import Schema, { array, boolean, DateType, number, string } from "computed-types";

export const ExperienceCreateInput = Schema({
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
			.error("Required")
			.of(string.max(512, "Cannot be longer than 512 characters"))
			.max(8, "Cannot have more than 8 highlights"),
		array
			.error("Required")
			.of(
				Schema({
					value: string.max(512, "Cannot be longer than 512 characters")
				})
			)
			.max(8, "Cannot have more than 8 highlights")
	),
	location: string.max(255, "Cannot be longer than 255 characters").optional(),
	organizationName: string.error("Required").max(255, "Cannot be longer than 255 charaters"),
	positionName: string.error("Required").max(255, "Cannot be longer than 255 characters"),
	startDate: Schema.either(
		DateType,
		Schema({
			month: number.gte(0, "Invalid month").lte(12, "Invalid year"),
			year: number.gte(0, "Invalid year")
		})
	),
	type: Schema.enum(ExperienceType).optional()
});
