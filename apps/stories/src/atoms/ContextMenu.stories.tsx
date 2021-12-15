import { ContextMenu, ContextMenuItem, ContextMenuProps } from "@makepurple/components";
import { useContextMenu } from "@makepurple/hooks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React, { useRef } from "react";

export default {
	title: "atoms/ContextMenu",
	component: ContextMenu
} as Meta;

const Template: Story<ContextMenuProps> = (args) => {
	const ref = useRef<HTMLButtonElement>(null);
	const { contextMenuProps } = useContextMenu(ref);

	return (
		<>
			<button ref={ref} type="button">
				Right Click Me!
			</button>
			<ContextMenu {...args} {...contextMenuProps}>
				<ContextMenuItem onClick={action("onClick")}>react</ContextMenuItem>
				<ContextMenuItem onClick={action("onClick")}>vue</ContextMenuItem>
				<ContextMenuItem onClick={action("onClick")}>angular</ContextMenuItem>
			</ContextMenu>
		</>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = {};
