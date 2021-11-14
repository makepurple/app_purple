import {
	ComboBox,
	ComboBoxInput,
	ComboBoxOption,
	ComboBoxProps,
	ComboBoxSelect
} from "@/client/atoms";
import { useComboBoxState } from "@/client/hooks";
import type { Meta, Story } from "@storybook/react";
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
		onInputValueChange: ({ inputValue = "" }) => {
			setItems(
				ITEMS.filter((item) => item.name.toLowerCase().startsWith(inputValue.toLowerCase()))
			);
		}
	});

	return (
		<>
			<ComboBox {...combobox} {...args}>
				<ComboBoxInput {...combobox} />
			</ComboBox>
			<ComboBoxSelect {...combobox}>
				{items.map((item, i) => (
					<ComboBoxOption key={item.id} {...combobox} item={item} index={i}>
						{item.name}
					</ComboBoxOption>
				))}
			</ComboBoxSelect>
		</>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
