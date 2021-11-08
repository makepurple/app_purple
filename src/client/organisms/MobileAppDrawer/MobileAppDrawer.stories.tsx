import { HamburgerMenuButton } from "@/client/atoms";
import { MobileAppDrawer } from "@/client/organisms";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { useDialogState } from "reakit";

export default {
	title: "organisms/MobileAppDrawer",
	component: MobileAppDrawer
} as Meta;

const Template: Story = (args) => {
	const dialog = useDialogState({ animated: true });

	return (
		<>
			<HamburgerMenuButton {...dialog} />
			<MobileAppDrawer {...dialog} {...args} />
		</>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
