import { SkillOwnerPageLayout, SkillOwnerPageLayoutProps } from "@makepurple/www";
import { GetSkillOwnerInfoSideBar_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/SkillOwnerPageLayout",
	compoent: SkillOwnerPageLayout
} as Meta;

const Template: Story<SkillOwnerPageLayoutProps> = (args) => {
	return <SkillOwnerPageLayout {...args} />;
};
Template.args = {
	skillOwner: "facebook"
};
Template.parameters = {
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetSkillOwnerInfoSideBar":
				return { data: GetSkillOwnerInfoSideBar_mock };
			default:
				return {};
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
