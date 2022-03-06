import { GdprCookieConsent, GdprCookieConsentProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/GdprCookieConsent",
	component: GdprCookieConsent
} as Meta;

const Template: Story<GdprCookieConsentProps> = (args) => {
	return <GdprCookieConsent {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
