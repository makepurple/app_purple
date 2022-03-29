import { SiteWideLayout } from "@makepurple/www";
import {
	GetNotificationCounts_mock,
	GetPostDraft_mock,
	GetSiteWideSideDrawer_mock,
	GetUserInfoSideBar_mock,
	GetUserOverview_mock,
	SuggestSkillOwners_mock,
	SuggestSkills_mock
} from "@makepurple/www/src/graphql/mocks";
import { UserTrophies_fragment_mock } from "@makepurple/www/src/graphql/mocks/fragments/UserTrophies.fragment.mock";
import { PageProps } from "@makepurple/www/src/page-props/[userName]";
import Page from "@makepurple/www/src/pages/[userName]";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "pages/[userName]",
	component: Page,
	decorators: [
		(Story) => (
			<SiteWideLayout>
				<Story />
			</SiteWideLayout>
		)
	]
} as Meta;

const Template: Story<PageProps> = (args) => {
	return <Page {...args} />;
};
Template.args = {};
Template.parameters = {
	layout: "fullscreen",
	nextRouter: {
		query: {
			userName: "leedavidcs"
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		switch (getOperationName(op.query)) {
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			case "GetUserOverview":
				return { data: GetUserOverview_mock };
			case "SuggestSkillOwners":
				return { data: SuggestSkillOwners_mock };
			case "SuggestSkills":
				return { data: SuggestSkills_mock };
			default:
				return {};
		}
	}
};

export const NoTrophies = Template.bind({});
NoTrophies.args = { ...Template.args };
NoTrophies.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		switch (getOperationName(op.query)) {
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			case "GetUserOverview":
				return {
					data: {
						...GetUserOverview_mock,
						user: {
							...GetUserOverview_mock.user,
							trophies: {
								...UserTrophies_fragment_mock,
								totalFollowers: 0,
								totalPostViews: 0,
								totalSkills: 0,
								totalUpvotes: 0,
								totalYearlyCommits: 0,
								totalYearlyPosts: 0
							}
						}
					}
				};
			case "SuggestSkillOwners":
				return { data: SuggestSkillOwners_mock };
			case "SuggestSkills":
				return { data: SuggestSkills_mock };
			default:
				return {};
		}
	}
};

export const NoPosts = Template.bind({});
NoPosts.args = { ...Template.args };
NoPosts.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		switch (getOperationName(op.query)) {
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			case "GetUserOverview":
				return {
					data: {
						...GetUserOverview_mock,
						user: {
							...GetUserOverview_mock.user,
							posts: {
								__typename: "PostConnection",
								totalCount: 0,
								edges: [],
								nodes: []
							}
						}
					}
				};
			case "SuggestSkillOwners":
				return { data: SuggestSkillOwners_mock };
			case "SuggestSkills":
				return { data: SuggestSkills_mock };
			default:
				return {};
		}
	}
};

export const NoExperiences = Template.bind({});
NoExperiences.args = { ...Template.args };
NoExperiences.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		switch (getOperationName(op.query)) {
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			case "GetUserOverview":
				return {
					data: {
						...GetUserOverview_mock,
						user: {
							...GetUserOverview_mock.user,
							experiences: {
								__typename: "ExperienceConnection",
								totalCount: 0,
								edges: [],
								nodes: []
							}
						}
					}
				};
			case "SuggestSkillOwners":
				return { data: SuggestSkillOwners_mock };
			case "SuggestSkills":
				return { data: SuggestSkills_mock };
			default:
				return {};
		}
	}
};

export const NoRepositories = Template.bind({});
NoRepositories.args = { ...Template.args };
NoRepositories.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		switch (getOperationName(op.query)) {
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			case "GetUserOverview":
				return {
					data: {
						...GetUserOverview_mock,
						user: {
							...GetUserOverview_mock.user,
							repositories: {
								__typename: "RepositoryConnection",
								totalCount: 0,
								edges: [],
								nodes: []
							}
						}
					}
				};
			case "SuggestSkillOwners":
				return { data: SuggestSkillOwners_mock };
			case "SuggestSkills":
				return { data: SuggestSkills_mock };
			default:
				return {};
		}
	}
};

export const NoExperiencesRepositories = Template.bind({});
NoExperiencesRepositories.args = { ...Template.args };
NoExperiencesRepositories.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		switch (getOperationName(op.query)) {
			case "GetNotificationCounts":
				return { data: GetNotificationCounts_mock };
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			case "GetUserInfoSideBar":
				return { data: GetUserInfoSideBar_mock };
			case "GetUserOverview":
				return {
					data: {
						...GetUserOverview_mock,
						user: {
							...GetUserOverview_mock.user,
							experiences: {
								__typename: "ExperienceConnection",
								totalCount: 0,
								edges: [],
								nodes: []
							},
							repositories: {
								__typename: "RepositoryConnection",
								totalCount: 0,
								edges: [],
								nodes: []
							}
						}
					}
				};
			case "SuggestSkillOwners":
				return { data: SuggestSkillOwners_mock };
			case "SuggestSkills":
				return { data: SuggestSkills_mock };
			default:
				return {};
		}
	}
};
