import { UserActivityCardJoined, UserActivityCardJoinedProps } from "@makepurple/www";
import { UserActivityJoined_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserActivityCardJoined",
	component: UserActivityCardJoined
} as Meta;

const Template: Story<UserActivityCardJoinedProps> = (args: any) => {
	return (
		<UserActivityCardJoined {...args}>
			<p>This is some content</p>
		</UserActivityCardJoined>
	);
};
Template.args = {
	userActivity: UserActivityJoined_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
