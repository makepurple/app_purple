import { ChatRoom, ChatRoomProps } from "@makepurple/www";
import { GetChat_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/ChatRoom",
	component: ChatRoom
} as Meta;

const Template: Story<ChatRoomProps> = (args) => {
	return <ChatRoom {...args} />;
};
Template.args = {};
Template.parameters = {
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetChat":
				return { data: GetChat_mock };
			default:
				return {};
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters
};
