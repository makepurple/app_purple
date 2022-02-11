import { UserGitHubContributionHeatmap, UserGitHubContributionHeatmapProps } from "@makepurple/www";
import { GitHubUser_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserGitHubContributionHeatmap",
	compoent: UserGitHubContributionHeatmap
} as Meta;

const Template: Story<UserGitHubContributionHeatmapProps> = (args) => {
	return <UserGitHubContributionHeatmap {...args} />;
};
Template.args = {
	contributionCalendar: GitHubUser_fragment_mock.contributionCalendar
};
Template.parameters = {
	layout: "fullscreen"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
