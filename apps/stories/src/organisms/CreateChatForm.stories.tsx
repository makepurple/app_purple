import { PromiseUtils } from "@makepurple/utils";
import { CreateChatForm, CreateChatFormProps } from "@makepurple/www";
import { SuggestViewerFriends_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/CreateChatForm",
	component: CreateChatForm
} as Meta;

const Template: Story<CreateChatFormProps> = (args) => {
	return <CreateChatForm {...args} tw="height[500px]" />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "SuggestViewerFriends":
				await PromiseUtils.wait(ms("1s"));

				return { data: SuggestViewerFriends_mock };
			default:
				return {};
		}
	}
};
