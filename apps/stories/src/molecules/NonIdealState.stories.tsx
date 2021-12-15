import { CodeSquareIcon, NonIdealState, NonIdealStateProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "molecules/NonIdealState",
	component: NonIdealState
} as Meta;

const Template: Story<NonIdealStateProps> = (args) => {
	return (
		<NonIdealState {...args}>
			<CodeSquareIcon height={64} width={64} />
		</NonIdealState>
	);
};
Template.args = {
	title: "Oops! Something went wrong!",
	subTitle: "Please try again in a few minutes"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
