import { CreateExperienceForm, CreateExperienceFormProps } from "@/client/organisms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/CreateExperienceForm",
	component: CreateExperienceForm
} as Meta;

const Template: Story<CreateExperienceFormProps> = (args) => {
	return <CreateExperienceForm {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
