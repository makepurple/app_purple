import { OrganizationSearchResult, OrganizationSearchResultProps } from "@makepurple/www";
import { GitHubOrganization_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/OrganizationSearchResult",
	component: OrganizationSearchResult
} as Meta;

const Template: Story<OrganizationSearchResultProps> = (args) => {
	return <OrganizationSearchResult {...args} />;
};
Template.args = {
	organization: GitHubOrganization_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
