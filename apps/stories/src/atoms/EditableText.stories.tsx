import { EditableText } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/EditableText",
	component: EditableText
} as Meta;

const Template: Story = (args) => {
	return <EditableText {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
