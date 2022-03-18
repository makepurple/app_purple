import { CodeExampleMiniCard, CodeExampleMiniCardProps } from "@makepurple/www";
import { CodeExample_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/CodeExampleMiniCard",
	component: CodeExampleMiniCard
} as Meta;

const Template: Story<CodeExampleMiniCardProps> = (args) => {
	return <CodeExampleMiniCard {...args} />;
};
Template.args = {
	codeExample: CodeExample_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
