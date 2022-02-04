import { UserActivityCard, UserActivityCardProps } from "@makepurple/www";
import {
	UserActivityCommentPost_fragment_mock,
	UserActivityFollowSkill_fragment_mock,
	UserActivityFollowUser_fragment_mock,
	UserActivityFriendAcceptUser_fragment_mock,
	UserActivityJoined_fragment_mock,
	UserActivityPublishPost_fragment_mock,
	UserActivityUpvotePost_fragment_mock
} from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserActivityCard",
	component: UserActivityCard
} as Meta;

const Template: Story<UserActivityCardProps> = (args: any) => {
	return (
		<UserActivityCard {...args}>
			<p>This is some content</p>
		</UserActivityCard>
	);
};
Template.args = {
	userActivity: UserActivityCommentPost_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = {
	...Template.args
};

export const CommentPost = Template.bind({});
CommentPost.args = {
	...Template.args,
	userActivity: UserActivityCommentPost_fragment_mock
};

export const FollowSkill = Template.bind({});
FollowSkill.args = {
	...Template.args,
	userActivity: UserActivityFollowSkill_fragment_mock
};

export const FollowUser = Template.bind({});
FollowUser.args = {
	...Template.args,
	userActivity: UserActivityFollowUser_fragment_mock
};

export const FriendAcceptUser = Template.bind({});
FriendAcceptUser.args = {
	...Template.args,
	userActivity: UserActivityFriendAcceptUser_fragment_mock
};

export const Joined = Template.bind({});
Joined.args = {
	...Template.args,
	userActivity: UserActivityJoined_fragment_mock
};

export const PublishPost = Template.bind({});
PublishPost.args = {
	...Template.args,
	userActivity: UserActivityPublishPost_fragment_mock
};

export const UpvotePost = Template.bind({});
UpvotePost.args = {
	...Template.args,
	userActivity: UserActivityUpvotePost_fragment_mock
};
