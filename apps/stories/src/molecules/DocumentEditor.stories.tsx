import { DocumentEditor, DocumentEditorProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import type { Descendant } from "slate";

export default {
	title: "molecules/DocumentEditor",
	component: DocumentEditor
} as Meta;

const Template: Story<DocumentEditorProps> = (args) => {
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
				readOnly={args.readOnly}
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
				<DocumentEditor.Editable
					name="storybook textarea"
					aria-label="Storybook-textarea"
				/>
			</DocumentEditor>
			<pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(value, null, 2)}</pre>
		</>
	);
};
Template.args = {
	disabled: false,
	error: false,
	readOnly: false
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
