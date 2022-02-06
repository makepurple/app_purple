import { ActivityFeedInfo, ActivityFeedInfoProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/ActivityFeedInfo",
	component: ActivityFeedInfo
} as Meta;

const Template: Story<ActivityFeedInfoProps> = (args) => {
	return <ActivityFeedInfo {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
