import { LoadingNotificationCard } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingNotificationCard",
	component: LoadingNotificationCard
} as Meta;

const Template: Story = (args) => {
	return <LoadingNotificationCard {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
