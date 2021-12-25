import { gql } from "../gql";

export const GitHubLanguage = gql`
	fragment GitHubLanguage on Language {
		__typename
		color
		id
		name
	}
`;
