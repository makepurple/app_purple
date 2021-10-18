import { DocumentEditor } from "@/client/molecules";
import React from "react";

export default {
	title: "molecules/DocumentEditor",
	component: DocumentEditor
};

const Template = (args) => {
	return (
		<DocumentEditor {...args}>
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
			<DocumentEditor.Editable name={args.name} />
		</DocumentEditor>
	);
};
Template.args = {
	name: "Storybook textarea",
	placeholder: "Hello world..."
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
