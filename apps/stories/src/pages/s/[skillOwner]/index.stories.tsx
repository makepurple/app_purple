import { SiteWideLayout } from "@makepurple/www";
import {
	GetNotificationCounts_mock,
	GetSkillOwnerExperiencers_mock,
	GetSkillOwnerInfoSideBar_mock,
	GetSkillOwnerRepositories_mock
} from "@makepurple/www/src/graphql/mocks";
import { PageProps } from "@makepurple/www/src/page-props/s/[skillOwner]";
import { Page } from "@makepurple/www/src/pages/s/[skillOwner]";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "pages/s/[skillOwner]",
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
			skillOwner: "facebook"
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetSkillOwnerExperiencers":
				return { data: GetSkillOwnerExperiencers_mock };
			case "GetSkillOwnerInfoSideBar":
				return { data: GetSkillOwnerInfoSideBar_mock };
			case "GetSkillOwnerRepositories":
				return { data: GetSkillOwnerRepositories_mock };
			default:
				return {};
		}
	}
};
