import { LoadingSearchResult, LoadingSearchResultProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/LoadingSearchResult",
	component: LoadingSearchResult
} as Meta;

const Template: Story<LoadingSearchResultProps> = (args) => {
	return <LoadingSearchResult {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
