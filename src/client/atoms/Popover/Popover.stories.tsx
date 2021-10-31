import { Button, Popover, PopoverArrow } from "@/client/atoms";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { PopoverDisclosure, usePopoverState } from "reakit";

export default {
	title: "atoms/Popover",
	component: Popover
} as Meta;

const Template: Story = (args) => {
	const popover = usePopoverState({
		placement: "bottom-start"
	});

	return (
		<>
			<PopoverDisclosure {...popover} as={Button}>
				Open Popover
			</PopoverDisclosure>
			<Popover {...popover} {...args}>
				<PopoverArrow {...popover} />
				This is some popover content
			</Popover>
		</>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
