import { UserTrophies, UserTrophiesProps } from "@makepurple/www";
import { GetUserTrophies_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/UserTrophies",
	component: UserTrophies
} as Meta;

const Template: Story<UserTrophiesProps> = (args) => {
	return <UserTrophies {...args} />;
};
Template.args = {
	userName: "leedavidcs"
};
Template.parameters = {
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetUserTrophies":
				return { data: GetUserTrophies_mock };
			default:
				return {};
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
