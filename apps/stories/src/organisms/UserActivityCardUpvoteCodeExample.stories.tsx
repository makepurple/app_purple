import {
	UserActivityCardUpvoteCodeExample,
	UserActivityCardUpvoteCodeExampleProps
} from "@makepurple/www";
import { UserActivityUpvoteCodeExample_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserActivityCardUpvoteCodeExample",
	component: UserActivityCardUpvoteCodeExample
} as Meta;

const Template: Story<UserActivityCardUpvoteCodeExampleProps> = (args: any) => {
	return (
		<UserActivityCardUpvoteCodeExample {...args}>
			<p>This is some content</p>
		</UserActivityCardUpvoteCodeExample>
	);
};
Template.args = {
	userActivity: UserActivityUpvoteCodeExample_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
