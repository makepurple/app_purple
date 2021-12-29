import { DocumentEditor, DocumentEditorProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React, { useState } from "react";

export default {
	title: "molecules/DocumentEditor",
	component: DocumentEditor
} as Meta;

const Template: Story<DocumentEditorProps> = (args) => {
	const [value, setValue] = useState<any>([
		{
			type: "language-tsx",
			children: [
				{
					text: 'const text: string = "This is some TypeScript Code";\n\nconsole.log(text);'
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				}
			]
		},
		{
			type: "heading-one",
			children: [
				{
					text: "Heading 1"
				}
			]
		},
		{
			type: "heading-two",
			children: [
				{
					text: "Heading 2"
				}
			]
		},
		{
			type: "heading-three",
			children: [
				{
					text: "Heading 3"
				}
			]
		},
		{
			type: "heading-four",
			children: [
				{
					text: "Heading 4"
				}
			]
		},
		{
			type: "heading-five",
			children: [
				{
					text: "Heading 5"
				}
			]
		},
		{
			type: "heading-six",
			children: [
				{
					text: "Heading 6"
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: "Bold Text",
					bold: true
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: "Italic Text",
					italic: true
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: "Underline Text",
					underline: true
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				}
			]
		},
		{
			type: "bulleted-list",
			children: [
				{
					type: "list-item",
					children: [
						{
							text: "List Item 1"
						}
					]
				},
				{
					type: "list-item",
					children: [
						{
							text: "List Item 2"
						}
					]
				},
				{
					type: "list-item",
					children: [
						{
							text: "List Item 3"
						}
					]
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				}
			]
		},
		{
			type: "numbered-list",
			children: [
				{
					type: "list-item",
					children: [
						{
							text: "List Item 1"
						}
					]
				},
				{
					type: "list-item",
					children: [
						{
							text: "List Item 2"
						}
					]
				},
				{
					type: "list-item",
					children: [
						{
							text: "List Item 3"
						}
					]
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				}
			]
		},
		{
			type: "block-quote",
			children: [
				{
					text: "Block quote"
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: "Line of code",
					code: true
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					bold: true,
					text: ""
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				},
				{
					type: "link",
					url: "https://google.com",
					children: [
						{
							text: "google"
						}
					]
				},
				{
					text: ""
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				}
			]
		},
		{
			type: "image",
			url: "https://github.githubassets.com/images/mona-loading-dark.gif",
			children: [
				{
					text: ""
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				},
				{
					type: "link",
					url: "https://google.com",
					children: [
						{
							text: ""
						}
					]
				},
				{
					text: ""
				}
			]
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
