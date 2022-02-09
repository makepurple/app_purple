import { Trophy, TrophyProps, TrophyRank } from "@makepurple/components";
import {
	TrophyThemeDefault,
	TrophyThemeOneDark
} from "@makepurple/components/src/molecules/Trophy/themes";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "molecules/Trophy",
	component: Trophy
} as Meta;

const Template: Story<TrophyProps> = (args) => {
	return <Trophy {...args} />;
};
Template.args = {
	achievement: "Deep Committer",
	rank: TrophyRank.SS,
	score: 3_100,
	theme: TrophyThemeDefault,
	title: "Commits"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };

export const OneDark = Template.bind({});
OneDark.args = {
	...Template.args,
	theme: TrophyThemeOneDark
};
