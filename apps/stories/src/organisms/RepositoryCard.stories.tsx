import { RepositoryCard, RepositoryCardProps } from "@makepurple/www";
import { Repository_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/RepositoryCard",
	component: RepositoryCard
} as Meta;

const Template: Story<RepositoryCardProps> = (args) => {
	return <RepositoryCard {...args} />;
};
Template.args = {
	repository: Repository_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
