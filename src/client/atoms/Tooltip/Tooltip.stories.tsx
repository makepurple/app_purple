import { Button, Tooltip, TooltipArrow } from "@/client/atoms";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { TooltipReference, useTooltipState } from "reakit";

export default {
	title: "atoms/Tooltip",
	component: Tooltip
} as Meta;

const Template: Story = (args) => {
	const tooltip = useTooltipState({
		placement: "bottom-start"
	});

	return (
		<>
			<TooltipReference {...tooltip} as={Button}>
				Open Tooltip
			</TooltipReference>
			<Tooltip {...args} {...tooltip}>
				<TooltipArrow {...tooltip} />
				This is some tooltip content
			</Tooltip>
		</>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
