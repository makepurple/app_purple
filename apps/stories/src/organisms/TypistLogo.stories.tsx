import { TypistLogo, TypistLogoProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/TypistLogo",
	component: TypistLogo
} as Meta;

const Template: Story<TypistLogoProps> = (args) => {
	return <TypistLogo {...args} />;
};
Template.args = {
	sentences: ["next.js", "urql", "prisma"]
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
