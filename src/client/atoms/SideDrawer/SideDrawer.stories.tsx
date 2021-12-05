import { Backdrop, SideDrawer, SideDrawerProps } from "@/client/atoms";
import { Dialog } from "@headlessui/react";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/SideDrawer",
	component: SideDrawer
} as Meta;

const Template: Story<SideDrawerProps> = (args) => {
	return (
		<SideDrawer open={args.open} onClose={() => undefined}>
			<Dialog.Overlay as={Backdrop} />
		</SideDrawer>
	);
};
Template.args = {
	open: true
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
