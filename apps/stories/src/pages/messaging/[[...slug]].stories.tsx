import { SiteWideLayout } from "@makepurple/www";
import { GetChats_mock, GetChat_mock } from "@makepurple/www/src/graphql/mocks";
import { PageProps } from "@makepurple/www/src/page-props/[userName]/";
import { Page } from "@makepurple/www/src/pages/messaging/[[...slug]]";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "pages/messaging/[[...slug]]",
	component: Page,
	decorators: [
		(Story) => (
			<SiteWideLayout>
				<Story />
			</SiteWideLayout>
		)
	]
} as Meta;

const Template: Story<PageProps> = (args) => {
	return <Page {...args} />;
};
Template.args = {};
Template.parameters = {
	layout: "fullscreen",
	nextRouter: {
		query: {
			slug: ["0"]
		}
	},
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetChat":
				return { data: GetChat_mock };
			case "GetChats":
				return { data: GetChats_mock };
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

export const NewChat = Template.bind({});
NewChat.args = { ...Template.args };
NewChat.parameters = {
	...Template.parameters,
	nextRouter: {
		query: {
			slug: []
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
			case "GetChat":
				return {
					data: {
						...GetChat_mock,
						chat: null
					}
				};
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
