import { AlertDialog, AlertDialogProps, Button } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import { stripIndents } from "common-tags";
import React from "react";

export default {
	title: "molecules/AlertDialog",
	component: AlertDialog
} as Meta;

const Template: Story<AlertDialogProps> = (args) => {
	return (
		<AlertDialog {...args}>
			<Button type="button">Delete account</Button>
		</AlertDialog>
	);
};
Template.args = {
	description: stripIndents`
		This action cannot be undone. This will permanently delete your account
		and remove your data from our servers.
	`,
	text: "Yes, delete account",
	title: "Are you absolutely sure?"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
