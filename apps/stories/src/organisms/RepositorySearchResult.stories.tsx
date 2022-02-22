import { RepositorySearchResult, RepositorySearchResultProps } from "@makepurple/www";
import { GitHubRepository_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/RepositorySearchResult",
	component: RepositorySearchResult
} as Meta;

const Template: Story<RepositorySearchResultProps> = (args) => {
	return <RepositorySearchResult {...args} />;
};
Template.args = {
	repository: GitHubRepository_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
