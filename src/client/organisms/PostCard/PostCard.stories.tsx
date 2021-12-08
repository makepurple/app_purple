import { GetPosts_mock } from "@/client/graphql/mocks";
import { PostCard, PostCardProps } from "@/client/organisms";
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
