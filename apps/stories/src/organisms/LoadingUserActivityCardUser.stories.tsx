import { LoadingUserActivityCardUser, LoadingUserActivityCardUserProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingUserActivityCardUser",
	component: LoadingUserActivityCardUser
} as Meta;

const Template: Story<LoadingUserActivityCardUserProps> = (args) => {
	return <LoadingUserActivityCardUser {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
