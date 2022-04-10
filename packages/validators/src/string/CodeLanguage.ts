import Schema from "computed-types";

export const CodeLanguage = Schema.enum(
	{
		Go: "Go",
		GraphQL: "GraphQL",
		HTML: "HTML",
		JavaScript: "JavaScript",
		Python: "Python",
		SCSS: "SCSS",
		SQL: "SQL",
		TypeScript: "TypeScript",
		YAML: "YAML"
	} as const,
	"Unsupported language"
);
