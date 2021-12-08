import { GetUserInfoSideBar_mock } from "@/client/graphql/mocks";
import { TopLanguages, TopLanguagesProps } from "@/client/organisms";
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

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
