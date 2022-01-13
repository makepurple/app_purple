import { PromiseUtils } from "@makepurple/utils";
import { RepositoryCard, RepositoryCardProps } from "@makepurple/www";
import { Repository_fragment_mock, SuggestSkills_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "organisms/RepositoryCard",
	component: RepositoryCard
} as Meta;

const Template: Story<RepositoryCardProps> = (args) => {
	return <RepositoryCard {...args} />;
};
Template.args = {
	editing: false,
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

export const AsUserOwned = Template.bind({});
AsUserOwned.args = {
	...Template.args,
	repository: {
		...(Repository_fragment_mock as any),
		github: {
			...Repository_fragment_mock.github,
			owner: {
				...Repository_fragment_mock.github.owner,
				__typename: "GitHubUser"
			}
		}
	}
};
AsUserOwned.parameters = {
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
