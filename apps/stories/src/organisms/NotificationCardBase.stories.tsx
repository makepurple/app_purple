import { NotificationCardBase, NotificationCardBaseProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/NotificationCardBase",
	component: NotificationCardBase
} as Meta;

const Template: Story<NotificationCardBaseProps> = (args) => {
	return <NotificationCardBase {...args} />;
};
Template.args = {
	unread: false
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
