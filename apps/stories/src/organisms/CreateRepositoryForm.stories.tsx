import { CreateRepositoryForm, CreateRepositoryFormProps } from "@makepurple/www";
import { SuggestRepositories_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "organisms/CreateRepositoryForm",
	component: CreateRepositoryForm
} as Meta;

const Template: Story<CreateRepositoryFormProps> = (args) => {
	return <CreateRepositoryForm {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: (op) => {
		switch (getOperationName(op.query)) {
			case "SuggestRepositories":
				return { data: SuggestRepositories_mock };
			default:
				return {};
		}
	}
};
