import { DocumentEditor } from "@/client/molecules";
import type { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import type { Descendant } from "slate";

export default {
	title: "molecules/DocumentEditor",
	component: DocumentEditor
} as Meta;

const Template: Story = (args) => {
	const [value, setValue] = useState<Descendant[]>([
		{
			type: "paragraph",
			children: [{ text: "Hello world~!" }]
		}
	]);

	return (
		<>
			<DocumentEditor
				disabled={args.disabled}
				error={args.error}
				value={value}
				onChange={(newValue) => setValue(newValue)}
			>
				<DocumentEditor.Toolbar>
					<DocumentEditor.Toolbar.CodeBlock />
					<DocumentEditor.Toolbar.Heading />
					<DocumentEditor.Toolbar.Bold />
					<DocumentEditor.Toolbar.Italic />
					<DocumentEditor.Toolbar.Underline />
					<DocumentEditor.Toolbar.BulletedList />
					<DocumentEditor.Toolbar.NumbedList />
					<DocumentEditor.Toolbar.BlockQuote />
					<DocumentEditor.Toolbar.Code />
					<DocumentEditor.Toolbar.Link />
					<DocumentEditor.Toolbar.Image />
				</DocumentEditor.Toolbar>
				<DocumentEditor.Editable name={args.name} aria-label="Storybook-textarea" />
			</DocumentEditor>
			<pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(value, null, 2)}</pre>
		</>
	);
};
Template.args = {
	disabled: false,
	error: false,
	name: "Storybook textarea"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
