import { SiteWideSideDrawer, SiteWideSideDrawerProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default {
	title: "organisms/SiteWideSideDrawer",
	component: SiteWideSideDrawer
} as Meta;

const Template: Story<SiteWideSideDrawerProps> = (args) => {
	return <SiteWideSideDrawer {...args} />;
};
Template.args = {
	open: true,
	onClose: () => undefined
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.decorators = [
	(Base) => (
		<SessionProvider session={null}>
			<Base />
		</SessionProvider>
	)
];

export const Authenticated = Template.bind({});
Authenticated.args = { ...Template.args };
