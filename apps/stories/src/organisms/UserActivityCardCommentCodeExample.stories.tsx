import {
	UserActivityCardCommentCodeExample,
	UserActivityCardCommentCodeExampleProps
} from "@makepurple/www";
import { UserActivityCommentCodeExample_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserActivityCardCommentCodeExample",
	component: UserActivityCardCommentCodeExample
} as Meta;

const Template: Story<UserActivityCardCommentCodeExampleProps> = (args: any) => {
	return (
		<UserActivityCardCommentCodeExample {...args}>
			<p>This is some content</p>
		</UserActivityCardCommentCodeExample>
	);
};
Template.args = {
	userActivity: UserActivityCommentCodeExample_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
