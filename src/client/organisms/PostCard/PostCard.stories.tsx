import { useGetPostsQuery } from "@/client/graphql";
import { GetPosts_mock, GetPosts_variables_mock } from "@/client/graphql/mocks";
import { PostCard } from "@/client/organisms";
import type { Meta, Story } from "@storybook/react";
import { getOperationName } from "@urql/core";
import React from "react";

export default {
	title: "organisms/PostCard",
	component: PostCard
} as Meta;

const Template: Story = (args) => {
	const [{ data }] = useGetPostsQuery({
		variables: GetPosts_variables_mock
	});

	const post = data?.posts[0];

	if (!post) return <></>;

	return <PostCard {...args} post={post} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	urql: (op) => {
		if (getOperationName(op.query) === "GetPosts") {
			return { data: GetPosts_mock };
		}

		return {};
	}
};
