import { SiteWideSearch, SiteWideSearchProps } from "@makepurple/www";
import { SuggestSkillOwners_mock, SuggestSkills_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/SiteWideSearch",
	compoent: SiteWideSearch
} as Meta;

const Template: Story<SiteWideSearchProps> = (args) => {
	return (
		<div tw="w-full">
			<SiteWideSearch {...args} tw="w-full max-width[500px] mx-auto" />
		</div>
	);
};
Template.args = {};
Template.parameters = {
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.query);

		switch (operationName) {
			case "SuggestSkillOwners":
				return { data: SuggestSkillOwners_mock };
			case "SuggestSkills":
				return { data: SuggestSkills_mock };
			default:
				return {};
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
