import { dayjs, PromiseUtils } from "@makepurple/utils";
import { UserInfoSideBar, UserInfoSideBarProps } from "@makepurple/www";
import {
	CreatePost_mock,
	GetPostDraft_mock,
	GetUserInfoSideBar_mock
} from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/UserInfoSideBar",
	component: UserInfoSideBar
} as Meta;

const Template: Story<UserInfoSideBarProps> = (args) => {
	return <UserInfoSideBar {...args} userName="leedavidcs" />;
};
Template.args = {};
Template.parameters = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op: Operation) => {
		switch (getOperationName(op.query)) {
			case "CreatePost":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreatePost_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			default:
				return {};
		}
	}
};

export const Banned: Story<UserInfoSideBarProps> = (args) => {
	return (
		<SessionProvider
			session={{
				accessToken: "",
				expires: "1",
				user: {
					id: "0",
					accessToken: "",
					email: "storybook@test-makepurple.com",
					name: "leedavidcs",
					image: "https://avatars.githubusercontent.com/u/15151154",
					role: "Admin"
				}
			}}
		>
			<UserInfoSideBar {...args} userName="leedavidcs" />
		</SessionProvider>
	);
};
Banned.args = { ...Template.args };
Banned.parameters = {
	...Template.parameters,
	urql: async (op: Operation) => {
		switch (getOperationName(op.query)) {
			case "CreatePost":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreatePost_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetUserInfoSideBar":
				return {
					data: {
						...GetUserInfoSideBar_mock,
						user: {
							...GetUserInfoSideBar_mock.user,
							banned: true,
							banReason: {
								__typename: "BanReason",
								id: "0",
								bannedBy: {
									__typename: "User",
									id: "1",
									name: "leedavidcs"
								},
								bannedById: "1",
								createdAt: dayjs(1318781876406).toDate(),
								reason: "This user did some bad things"
							}
						}
					}
				};
			default:
				return {};
		}
	}
};

export const ViewerIsFriend = Template.bind({});
ViewerIsFriend.args = { ...Template.args };
ViewerIsFriend.parameters = {
	...Template.parameters,
	urql: async (op: Operation) => {
		switch (getOperationName(op.query)) {
			case "CreatePost":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreatePost_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetUserInfoSideBar":
				return {
					data: {
						...GetUserInfoSideBar_mock,
						user: {
							...GetUserInfoSideBar_mock.user,
							id: "1",
							viewerIsFriend: true
						}
					}
				};
			default:
				return {};
		}
	}
};

export const ViewerCantFriend = Template.bind({});
ViewerCantFriend.args = { ...Template.args };
ViewerCantFriend.parameters = {
	...Template.parameters,
	urql: async (op: Operation) => {
		switch (getOperationName(op.query)) {
			case "CreatePost":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreatePost_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetUserInfoSideBar":
				return {
					data: {
						...GetUserInfoSideBar_mock,
						user: {
							...GetUserInfoSideBar_mock.user,
							id: "1",
							viewerCanFriend: false
						}
					}
				};
			default:
				return {};
		}
	}
};

export const ViewerFollowing = Template.bind({});
ViewerFollowing.args = { ...Template.args };
ViewerFollowing.parameters = {
	...Template.parameters,
	urql: async (op: Operation) => {
		switch (getOperationName(op.query)) {
			case "CreatePost":
				await PromiseUtils.wait(ms("1s"));

				return { data: CreatePost_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetUserInfoSideBar":
				return {
					data: {
						...GetUserInfoSideBar_mock,
						user: {
							...GetUserInfoSideBar_mock.user,
							id: "1",
							viewerFollowing: true
						}
					}
				};
			default:
				return {};
		}
	}
};
