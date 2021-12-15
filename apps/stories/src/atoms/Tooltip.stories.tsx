import { Button, Tooltip, TooltipProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Tooltip",
	component: Tooltip
} as Meta;

const Template: Story<TooltipProps> = (args) => {
	return (
		<Tooltip {...args}>
			<Button>Reference</Button>
		</Tooltip>
	);
};
Template.args = {
	content: "This is some tooltip content"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
