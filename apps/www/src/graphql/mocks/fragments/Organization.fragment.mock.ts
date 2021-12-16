import { Organization } from "../../../graphql/generated";
import { GitHubOrganization_fragment_mock } from "./GitHubOrganization.fragment.mock";

export const Organization_fragment_mock: Organization = {
	__typename: "Organization",
	id: 1,
	experiences: [],
	name: "facebook",
	github: GitHubOrganization_fragment_mock
};
