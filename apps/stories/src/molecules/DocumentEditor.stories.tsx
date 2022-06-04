import { DocumentEditor, DocumentEditorProps } from "@makepurple/components";
import { DocumentEditorValue } from "@makepurple/validators";
import type { Meta, Story } from "@storybook/react";
import React, { useMemo, useState } from "react";

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
					underline: true,
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
							text: "The SPA had no knowledge of the Next.js app, and react-router navigated internally"
						}
					]
				},
				{
					type: "list-item",
					children: [
						{
							text: "We were using "
						},
						{
							url: "https://www.npmjs.com/package/@auth0/auth0-spa-js",
							type: "link",
							children: [
								{
									text: "@auth0/auth0-spa-js"
								}
							]
						},
						{
							text: " on the SPA and couldn't to log users out"
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
		}
	]);

	const message = useMemo(() => DocumentEditorValue.destruct()(value)[0]?.message, [value]);

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
			<div>Error: {message}</div>
			<pre style={{ fontSize: 12, whiteSpace: "pre-wrap" }}>
				{JSON.stringify(value, null, 2)}
			</pre>
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

export const JustLink: Story<DocumentEditorProps> = (args) => {
	const [value, setValue] = useState<any>([
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
			<pre style={{ fontSize: 12, whiteSpace: "pre-wrap" }}>
				{JSON.stringify(value, null, 2)}
			</pre>
		</>
	);
};
JustLink.args = {
	disabled: false,
	error: false,
	readOnly: false
};

export const WithTypeScript: Story<DocumentEditorProps> = (args) => {
	const [value, setValue] = useState<any>([
		{
			type: "language-tsx",
			children: [
				{
					text: "const GET_POSTS = gql`\n    query GetPosts {\n        posts {\n            id\n            title\n        }\n    }\n`;\n\nuseQuery({\n    query: GET_POSTS\n});"
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
			<pre style={{ fontSize: 12, whiteSpace: "pre-wrap" }}>
				{JSON.stringify(value, null, 2)}
			</pre>
		</>
	);
};
WithTypeScript.args = {
	disabled: false,
	error: false,
	readOnly: false
};

export const WithGraphQL: Story<DocumentEditorProps> = (args) => {
	const [value, setValue] = useState<any>([
		{
			type: "language-graphql",
			children: [
				{
					text: "input PostWhereUniqueInput {\n    id: ID\n}\n\ninput PostCreateInput {}"
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
			<pre style={{ fontSize: 12, whiteSpace: "pre-wrap" }}>
				{JSON.stringify(value, null, 2)}
			</pre>
		</>
	);
};
WithGraphQL.args = {
	disabled: false,
	error: false,
	readOnly: false
};

export const WithMultiLineCodeBlock: Story<DocumentEditorProps> = (args) => {
	const [value, setValue] = useState<any>([
		{
			type: "language-tsx",
			children: [
				{
					text: "const GET_POSTS = gql`\n\n\ntest\n\nasdf asdf\n`;"
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
			<pre style={{ fontSize: 12, whiteSpace: "pre-wrap" }}>
				{JSON.stringify(value, null, 2)}
			</pre>
		</>
	);
};
WithMultiLineCodeBlock.args = {
	disabled: false,
	error: false,
	readOnly: false
};
