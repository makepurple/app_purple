import { useContextMenu } from "@/client/hooks";
import { ContextMenu } from "@/client/molecules";
import { action } from "@storybook/addon-actions";
import React, { useRef } from "react";

export default {
	title: "molecules/ContextMenu",
	component: ContextMenu
};

const Template = (args) => {
	const ref = useRef<HTMLButtonElement>(null);
	const { contextMenuProps } = useContextMenu(ref);

	return (
		<>
			<button ref={ref} type="button">
				Right Click Me!
			</button>
			<ContextMenu {...args} {...contextMenuProps}>
				<ContextMenu.Item onClick={action("onClick")}>react</ContextMenu.Item>
				<ContextMenu.Item onClick={action("onClick")}>vue</ContextMenu.Item>
				<ContextMenu.Item onClick={action("onClick")}>angular</ContextMenu.Item>
			</ContextMenu>
		</>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = {};
