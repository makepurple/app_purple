import { UserOverviewExperienceCard, UserOverviewExperienceCardProps } from "@makepurple/www";
import { Experience_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserOverviewExperienceCard",
	compoent: UserOverviewExperienceCard
} as Meta;

const Template: Story<UserOverviewExperienceCardProps> = (args) => {
	return <UserOverviewExperienceCard {...args} />;
};
Template.args = {
	experience: Experience_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
