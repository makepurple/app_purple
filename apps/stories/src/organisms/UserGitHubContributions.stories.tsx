import { UserGitHubContributions, UserGitHubContributionsProps } from "@makepurple/www";
import { GetUserGitHubContributions_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/UserGitHubContributions",
	compoent: UserGitHubContributions
} as Meta;

const Template: Story<UserGitHubContributionsProps> = (args) => {
	return <UserGitHubContributions {...args} />;
};
Template.args = {
	userName: "leedavidcs"
};
Template.parameters = {
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetUserGitHubContributions":
				return { data: GetUserGitHubContributions_mock };
			default:
				return {};
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
