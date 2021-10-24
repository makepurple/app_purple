import { LazyTippy } from "@/client/atoms";
import React, { useState } from "react";

export default {
	title: "atoms/LazyTippy",
	component: LazyTippy
};

const Template = (args) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<LazyTippy
			content={<div style={{ height: 100, width: 100, backgroundColor: "red" }} />}
			{...args}
			visible={args.open || open}
		>
			<button
				onClick={() => {
					setOpen((oldOpen) => !oldOpen);
				}}
				type="button"
			>
				Click me
			</button>
		</LazyTippy>
	);
};
Template.args = {
	open: false
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
