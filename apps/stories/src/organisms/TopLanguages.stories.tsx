import { TopLanguages, TopLanguagesProps } from "@makepurple/www";
import { GetUserInfoSideBar_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/TopLanguages",
	component: TopLanguages
} as Meta;

const Template: Story<TopLanguagesProps> = (args) => {
	return <TopLanguages {...args} style={{ width: 296 }} />;
};
Template.args = {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	topLanguages: GetUserInfoSideBar_mock.user!.github.topLanguages
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
