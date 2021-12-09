import { LoadingExperienceCard, LoadingExperienceCardProps } from "@/client/organisms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingExperienceCard",
	component: LoadingExperienceCard
} as Meta;

const Template: Story<LoadingExperienceCardProps> = (args) => {
	return <LoadingExperienceCard {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
