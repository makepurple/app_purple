import { PostGuidelines } from "@/client/organisms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/PostGuidelines",
	component: PostGuidelines
} as Meta;

const Template: Story = (args) => {
	return <PostGuidelines {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
