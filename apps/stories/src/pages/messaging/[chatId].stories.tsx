import { SiteWideLayout } from "@makepurple/www";
import { GetChats_mock } from "@makepurple/www/src/graphql/mocks";
import { Page } from "@makepurple/www/src/pages/messaging/[chatId]";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "pages/messaging/[chatId]",
	component: Page,
	decorators: [
		(Story) => (
			<SiteWideLayout>
				<Story />
			</SiteWideLayout>
		)
	]
} as Meta;

const Template: Story = (args) => {
	return <Page {...args} />;
};
Template.args = {};
Template.parameters = {
	layout: "fullscreen"
};

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

export const NoChats = Template.bind({});
NoChats.args = { ...Template.args };
NoChats.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetChats":
				return {
					data: {
						...GetChats_mock,
						viewer: {
							...GetChats_mock.viewer,
							chats: {
								...GetChats_mock.viewer?.chats,
								edges: [],
								nodes: []
							}
						}
					}
				};
			default:
				return {};
		}
	}
};