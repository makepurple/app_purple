import { LoadingCodeExampleCard, LoadingCodeExampleCardProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingCodeExampleCard",
	component: LoadingCodeExampleCard
} as Meta;

const Template: Story<LoadingCodeExampleCardProps> = (args) => {
	return <LoadingCodeExampleCard {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
