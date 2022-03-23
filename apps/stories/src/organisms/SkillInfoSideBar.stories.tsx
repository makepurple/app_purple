import { SkillInfoSideBar, SkillInfoSideBarProps } from "@makepurple/www";
import { GetPostDraft_mock, GetSkillInfoSideBar_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/SkillInfoSideBar",
	compoent: SkillInfoSideBar
} as Meta;

const Template: Story<SkillInfoSideBarProps> = (args) => {
	return <SkillInfoSideBar {...args} />;
};
Template.args = {
	skillName: "react",
	skillOwner: "facebook"
};
Template.parameters = {
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSkillInfoSideBar":
				return { data: GetSkillInfoSideBar_mock };
			default:
				return {};
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
