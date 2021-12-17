import { PostCard, PostCardProps } from "@makepurple/www";
import { GetPosts_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/PostCard",
	component: PostCard
} as Meta;

const Template: Story<PostCardProps> = (args) => {
	return <PostCard {...args} />;
};
Template.args = {
	post: GetPosts_mock.posts.nodes[0]
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
