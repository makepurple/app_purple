import { UserConnectionPageTabs, UserConnectionPageTabsProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserConnectionPageTabs",
	compoent: UserConnectionPageTabs
} as Meta;

const Template: Story<UserConnectionPageTabsProps> = (args) => {
	return <UserConnectionPageTabs {...args} />;
};
Template.args = {
	selectedTab: "connections"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
