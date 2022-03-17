import { PromiseUtils } from "@makepurple/utils";
import { UpdateRepositoryCard, UpdateRepositoryCardProps } from "@makepurple/www";
import { Repository_fragment_mock, SuggestSkills_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import { getOperationName } from "@urql/core";
import ms from "ms";
import React from "react";

export default {
	title: "organisms/UpdateRepositoryCard",
	component: UpdateRepositoryCard
} as Meta;

const Template: Story<UpdateRepositoryCardProps> = (args) => {
	return <UpdateRepositoryCard {...args} />;
};
Template.args = {
	repository: Repository_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op: any) => {
		switch (getOperationName(op.query)) {
			case "SuggestSkills":
				await PromiseUtils.wait(ms("1s"));

				return { data: SuggestSkills_mock };
			default:
				return {};
		}
	}
};
