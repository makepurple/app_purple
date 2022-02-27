import { CodeBlock, CodeBlockProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import { codeBlock } from "common-tags";
import React from "react";

export default {
	title: "molecules/CodeBlock",
	component: CodeBlock
} as Meta;

const code = codeBlock`
import React, { FC } from "react";

export interface ButtonProps {
	className?: string;
	style?: React.CSSProperties;
}

export const Button: FC<ButtonProps> = (props) => <button {...props} />;
`;

const Template: Story<CodeBlockProps> = (args) => {
	return <CodeBlock {...args} code={code} />;
};
Template.args = {
	language: "tsx",
	languageName: "TypeScript"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
