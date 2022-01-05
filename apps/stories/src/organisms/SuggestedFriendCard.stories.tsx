import { SuggestedFriendCard, SuggestedFriendCardProps } from "@makepurple/www";
import { Post_fragment_mock, User_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/SuggestedFriendCard",
	component: SuggestedFriendCard
} as Meta;

const Template: Story<SuggestedFriendCardProps> = (args) => {
	return <SuggestedFriendCard {...args} />;
};
Template.args = {
	data: {
		...User_fragment_mock,
		posts: {
			...User_fragment_mock.posts,
			nodes: [Post_fragment_mock]
		}
	},
	index: 0,
	width: 300
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
