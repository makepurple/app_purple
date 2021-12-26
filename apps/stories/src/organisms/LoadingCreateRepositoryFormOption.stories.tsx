import {
	LoadingCreateRepositoryFormOption,
	LoadingCreateRepositoryFormOptionProps
} from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingCreateRepositoryFormOption",
	component: LoadingCreateRepositoryFormOption
} as Meta;

const Template: Story<LoadingCreateRepositoryFormOptionProps> = (args) => {
	return <LoadingCreateRepositoryFormOption {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
