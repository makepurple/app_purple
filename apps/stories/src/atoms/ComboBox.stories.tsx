import { ComboBox, ComboBoxProps } from "@makepurple/components";
import { useComboBoxState } from "@makepurple/hooks";
import { PromiseUtils } from "@makepurple/utils";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React, { useState } from "react";

const ITEMS = [
	{ id: 1, name: "react" },
	{ id: 2, name: "vue" },
	{ id: 3, name: "angular" }
];

export default {
	title: "atoms/ComboBox",
	component: ComboBox
} as Meta;

const Template: Story<ComboBoxProps> = (args) => {
	const [items, setItems] = useState(ITEMS);
	const combobox = useComboBoxState({
		items,
		itemToString: (item) => item?.name ?? "",
		onInputValueChange: async ({ inputValue = "" }) => {
			await PromiseUtils.wait(ms("2s"));

			setItems(
				ITEMS.filter((item) => item.name.toLowerCase().startsWith(inputValue.toLowerCase()))
			);
		}
	});

	return (
		<>
			<ComboBox {...combobox} {...args}>
				<ComboBox.Input {...combobox.getInputProps()} />
			</ComboBox>
			<ComboBox.Options {...combobox}>
				{items.map((item) => (
					<ComboBox.Option
						key={item.id}
						{...combobox.getInputProps()}
						isOpen={combobox.isOpen}
					>
						{item.name}
					</ComboBox.Option>
				))}
			</ComboBox.Options>
		</>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
