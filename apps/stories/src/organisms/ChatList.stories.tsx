import { ChatList, ChatListProps } from "@makepurple/www";
import { GetChats_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/ChatList",
	component: ChatList
} as Meta;

const Template: Story<ChatListProps> = (args) => {
	return <ChatList {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetChats":
				return { data: GetChats_mock };
			default:
				return {};
		}
	}
};
