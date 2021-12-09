import { ExperienceType } from "@prisma/client";
import Schema, { array, DateType, number, string } from "computed-types";

export const ExperienceCreateInput = Schema({
	endDate: Schema.either(
		DateType,
		Schema({
			month: number.gte(0, "Invalid month").lte(12, "Invalid year"),
			year: number.gte(0, "Invalid year")
		})
	).optional(),
	highlights: array
		.of(string.max(512, "Cannot be longer than 512 characters"))
		.max(12, "Cannot have more than 16 highlights"),
	location: string.max(255, "Cannot be longer than 255 characters"),
	organizationName: string.max(255, "Cannot be longer than 255 charaters"),
	positionName: string.max(255, "Cannot be longer than 255 characters"),
	startDate: Schema.either(
		DateType,
		Schema({
			month: number.gte(0, "Invalid month").lte(12, "Invalid year"),
			year: number.gte(0, "Invalid year")
		})
	),
	type: Schema.enum(ExperienceType).optional()
});
