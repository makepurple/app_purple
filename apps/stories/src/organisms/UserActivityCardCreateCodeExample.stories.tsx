import {
	UserActivityCardCreateCodeExample,
	UserActivityCardCreateCodeExampleProps
} from "@makepurple/www";
import { UserActivityUpvoteCodeExample_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserActivityCardCreateCodeExample",
	component: UserActivityCardCreateCodeExample
} as Meta;

const Template: Story<UserActivityCardCreateCodeExampleProps> = (args: any) => {
	return (
		<UserActivityCardCreateCodeExample {...args}>
			<p>This is some content</p>
		</UserActivityCardCreateCodeExample>
	);
};
Template.args = {
	userActivity: UserActivityUpvoteCodeExample_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
