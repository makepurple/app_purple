import { SiteWideLayout } from "@makepurple/www";
import { SuggestFriends_mock } from "@makepurple/www/src/graphql/mocks";
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

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	layout: "fullscreen",
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "SuggestFriends":
				return { data: SuggestFriends_mock };
			default:
				return {};
		}
	}
};
