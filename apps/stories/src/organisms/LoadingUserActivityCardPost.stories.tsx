import { LoadingUserActivityCardPost, LoadingUserActivityCardPostProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingUserActivityCardPost",
	component: LoadingUserActivityCardPost
} as Meta;

const Template: Story<LoadingUserActivityCardPostProps> = (args) => {
	return <LoadingUserActivityCardPost {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
