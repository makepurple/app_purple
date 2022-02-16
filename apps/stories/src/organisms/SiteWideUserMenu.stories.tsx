import { SiteWideUserMenu, SiteWideUserMenuProps } from "@makepurple/www";
import {
	GetNotificationCounts_mock,
	GetPostDraft_mock,
	GetUserFriendRequestCount_mock
} from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/SiteWideUserMenu",
	compoent: SiteWideUserMenu
} as Meta;

const Template: Story<SiteWideUserMenuProps> = (args) => {
	return <SiteWideUserMenu {...args} />;
};
Template.args = {};
Template.parameters = {
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetUserFriendRequestCount":
				return { data: GetUserFriendRequestCount_mock };
			default:
				return {};
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
