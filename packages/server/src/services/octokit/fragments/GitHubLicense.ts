import { gql } from "../gql";

export const GitHubLicense = gql`
	fragment GitHubLicense on License {
		__typename
		description
		id
		name
		nickname
		spdxId
		url
	}
`;
