import { NonIdealState } from "@/client/molecules";
import { CodeSquareIcon } from "@/client/svgs";
import type { Meta } from "@storybook/react";
import React from "react";

export default {
	title: "molecules/NonIdealState",
	component: NonIdealState
} as Meta;

const Template = (args) => {
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
