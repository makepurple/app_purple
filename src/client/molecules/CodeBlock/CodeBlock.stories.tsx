import { CodeBlock } from "@/client/molecules";
import { codeBlock } from "common-tags";
import React from "react";

export default {
	title: "molecules/CodeBlock",
	component: CodeBlock
};

const code = codeBlock`
import React, { FC } from "react";

export interface ButtonProps {
	className?: string;
	style?: React.CSSProperties;
}

export const Button: FC<ButtonProps> = (props) => <button {...props} />;
`;

const Template = (args) => {
	return <CodeBlock {...args} code={code} />;
};
Template.args = {
	language: "tsx"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
