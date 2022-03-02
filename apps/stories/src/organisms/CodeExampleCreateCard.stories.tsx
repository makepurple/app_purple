import { CodeExampleCreateCard, CodeExampleCreateCardProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/CodeExampleCreateCard",
	component: CodeExampleCreateCard
} as Meta;

const Template: Story<CodeExampleCreateCardProps> = (args) => {
	return <CodeExampleCreateCard {...args} />;
};
Template.args = {
	userName: "leedavidcs"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
