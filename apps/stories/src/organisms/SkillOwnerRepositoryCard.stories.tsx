import { SkillOwnerRepositoryCard, SkillOwnerRepositoryCardProps } from "@makepurple/www";
import { GitHubRepository_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/SkillOwnerRepositoryCard",
	compoent: SkillOwnerRepositoryCard
} as Meta;

const Template: Story<SkillOwnerRepositoryCardProps> = (args) => {
	return <SkillOwnerRepositoryCard {...args} />;
};
Template.args = {
	repository: GitHubRepository_fragment_mock,
	skillOwner: "facebook"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
