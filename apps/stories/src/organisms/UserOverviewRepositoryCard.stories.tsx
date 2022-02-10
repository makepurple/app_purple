import { UserOverviewRepositoryCard, UserOverviewRepositoryCardProps } from "@makepurple/www";
import { Repository_fragment_mock, Skill_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserOverviewRepositoryCard",
	compoent: UserOverviewRepositoryCard
} as Meta;

const Template: Story<UserOverviewRepositoryCardProps> = (args) => {
	return <UserOverviewRepositoryCard {...args} />;
};
Template.args = {
	repository: {
		...(Repository_fragment_mock as any),
		skills: [
			{
				...Skill_fragment_mock,
				id: "0",
				name: "react",
				owner: "facebook"
			},
			{
				...Skill_fragment_mock,
				id: "1",
				name: "typescript",
				owner: "microsoft"
			},
			{
				...Skill_fragment_mock,
				id: "1",
				name: "react-native",
				owner: "facebook"
			},
			{
				...Skill_fragment_mock,
				id: "1",
				name: "graphql-js",
				owner: "graphql"
			}
		]
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
