import { PromiseUtils } from "@makepurple/utils";
import { CommentCard, CommentCardProps } from "@makepurple/www";
import { Comment_fragment_mock, GetCommentReplies_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/CommentCard",
	component: CommentCard
} as Meta;

const Template: Story<CommentCardProps> = (args) => {
	return <CommentCard {...args} />;
};
Template.args = {
	comment: {
		...Comment_fragment_mock,
		replies: {
			__typename: "CommentConnection",
			totalCount: 8
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op: Operation) => {
		switch (getOperationName(op.query)) {
			case "GetCommentReplies":
				await PromiseUtils.wait(ms("0.5s"));

				action("GetCommentReplies")(op.variables);

				return { data: GetCommentReplies_mock };
			default:
				return {};
		}
	}
};
