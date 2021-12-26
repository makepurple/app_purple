import { CreateRepositoryFormOption, CreateRepositoryFormOptionProps } from "@makepurple/www";
import { GitHubRepository_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/CreateRepositoryFormOption",
	component: CreateRepositoryFormOption
} as Meta;

const Template: Story<CreateRepositoryFormOptionProps> = (args) => {
	return <CreateRepositoryFormOption {...args} />;
};
Template.args = {
	repository: GitHubRepository_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
