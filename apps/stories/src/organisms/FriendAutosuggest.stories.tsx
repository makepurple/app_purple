import { Tags } from "@makepurple/components";
import { FriendAutosuggest, FriendAutosuggestProps } from "@makepurple/www";
import { SuggestViewerFriends_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/FriendAutosuggest",
	component: FriendAutosuggest
} as Meta;

const Template: Story<FriendAutosuggestProps> = (args) => {
	return (
		<Tags editable>
			<Tags.Tag id="leedavidcs">leedavidcs</Tags.Tag>
			<Tags.Tag id="dsklyar">dsklyar</Tags.Tag>
			<FriendAutosuggest {...args} />
		</Tags>
	);
};
Template.args = {};
Template.parameters = {
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "SuggestViewerFriends":
				return { data: SuggestViewerFriends_mock };
			default:
				return {};
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters
};
