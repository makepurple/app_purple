import { Experience_fragment_mock } from "@/client/graphql/mocks";
import { ExperienceCard, ExperienceCardProps } from "@/client/organisms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/ExperienceCard",
	component: ExperienceCard
} as Meta;

const Template: Story<ExperienceCardProps> = (args) => {
	return <ExperienceCard {...args} />;
};
Template.args = {
	experience: Experience_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
