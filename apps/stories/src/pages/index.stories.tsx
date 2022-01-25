import { SiteWideLayout } from "@makepurple/www";
import { GetNotificationCount_mock, SuggestFriends_mock } from "@makepurple/www/src/graphql/mocks";
import { Page } from "@makepurple/www/src/pages";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "pages",
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
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetNotificationCount":
				return { data: GetNotificationCount_mock };
			case "SuggestFriends":
				return { data: SuggestFriends_mock };
			default:
				return {};
		}
	}
};
