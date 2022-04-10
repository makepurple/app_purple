import Schema from "computed-types";

export const ExperienceType = Schema.enum(
	{
		FullTime: "FullTime",
		PartTime: "PartTime",
		Contract: "Contract",
		Intern: "Intern",
		OpenSource: "OpenSource"
	} as const,
	"Unsupported type"
);
