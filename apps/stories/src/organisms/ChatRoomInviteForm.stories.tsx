import { ChatRoomInviteForm, ChatRoomInviteFormProps } from "@makepurple/www";
import { Chat_fragment_mock, SuggestViewerFriends_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/ChatRoomInviteForm",
	component: ChatRoomInviteForm
} as Meta;

const Template: Story<ChatRoomInviteFormProps> = (args) => {
	return <ChatRoomInviteForm {...args}>Leave Chat</ChatRoomInviteForm>;
};
Template.args = {
	chat: Chat_fragment_mock
};
Template.parameters = {
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "SuggestViewerFriends":
				return { data: SuggestViewerFriends_mock };
			default:
				return {};
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
