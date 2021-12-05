import { MobileAppDrawer, MobileAppDrawerProps } from "@/client/organisms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/MobileAppDrawer",
	component: MobileAppDrawer
} as Meta;

const Template: Story<MobileAppDrawerProps> = (args) => {
	return <MobileAppDrawer {...args} />;
};
Template.args = {
	open: true,
	onClose: () => undefined
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
