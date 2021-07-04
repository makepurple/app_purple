import React from "react";
import { LoginButton } from "./LoginButton";

export default {
	title: "organisms/LoginButton",
	component: LoginButton
};

const Template = (args) => {
	return <LoginButton {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
