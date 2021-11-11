import { stripIndents } from "common-tags";

export const gql = (strings: TemplateStringsArray, ...exprs: any[]) => {
	return stripIndents(strings, ...exprs);
};
