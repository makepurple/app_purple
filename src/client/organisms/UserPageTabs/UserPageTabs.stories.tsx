import { UserPageTabs, UserPageTabsProps } from "@/client/organisms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserPageTabs",
	component: UserPageTabs
} as Meta;

const Template: Story<UserPageTabsProps> = (args) => {
	return <UserPageTabs {...args} />;
};
Template.args = {
	selectedTab: "posts",
	userName: "leedavidcs"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
