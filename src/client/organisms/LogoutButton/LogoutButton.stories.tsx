import { LogoutButton } from "@/client/organisms";
import React from "react";

export default {
	title: "organisms/LogoutButton",
	component: LogoutButton
};

const Template = (args) => <LogoutButton {...args} />;
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
