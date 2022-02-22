import { UserSearchResult, UserSearchResultProps } from "@makepurple/www";
import { GitHubUser_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserSearchResult",
	component: UserSearchResult
} as Meta;

const Template: Story<UserSearchResultProps> = (args) => {
	return <UserSearchResult {...args} />;
};
Template.args = {
	user: GitHubUser_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
