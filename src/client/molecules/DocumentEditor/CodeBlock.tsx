import { Menu, Popover } from "@/client/atoms";
import { useToggle } from "@/client/hooks";
import { CodeIcon } from "@/client/svgs";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";
import React, { FC, useState } from "react";
import CodeEditor from "react-simple-code-editor";
import { Editor, Element, Node, Transforms } from "slate";
import {
	ReactEditor,
	RenderElementProps,
	useReadOnly,
	useSelected,
	useSlateStatic
} from "slate-react";
import styled, { css } from "styled-components";
import { ToolbarButton } from "./ToolbarButton";

const Root = styled.div<{ $selected: boolean }>`
	border: 4px solid ${({ theme }) => theme.palette.lightGrey};
	border-radius: 6px;
	overflow: auto;
	font-size: 0.875rem;
	font-family: "Source Code Pro", "Consolas", "Monaco", "Menlo", "Mono", "DejaVu Sans Mono",
		"Bitstream Vera Sans Mono", "Liberation Mono", "Courier New", Courier, monospace;
	tab-size: 4;

	${({ $selected }) =>
		$selected &&
		css`
			border: 4px solid ${({ theme }) => theme.palette.lightPurple};
		`}
`;

const StyledCodeEditor = styled(CodeEditor)`
	user-select: none;
	pointer-events: none;

	& textarea {
		user-select: auto;
		pointer-events: auto;
	}
`;

const Line = styled.span`
	display: table-row;
`;

const LineContent = styled.span`
	display: table-cell;
`;

export type CodeBlockSlateType = `language-${Language}`;

export const withCodeBlock = (editor: Editor): Editor => {
	const { isVoid } = editor;

	editor.isVoid = (element: Element): boolean => {
		return element.type.startsWith("language-") ? true : isVoid(element);
	};

	return editor;
};

type CodeBlockLanguage = [name: string, slateType: CodeBlockSlateType];

const supportedLanguages: readonly CodeBlockLanguage[] = [
	["JavaScript", "language-jsx"],
	["TypeScript", "language-tsx"],
	["HTML", "language-handlebars"],
	["CSS / SCSS", "language-scss"],
	["GraphQL", "language-graphql"],
	["Python", "language-python"],
	["Go", "language-go"],
	["SQL", "language-sql"],
	["YAML", "language-yaml"]
];

export const CodeBlockToolbarButton: FC<Record<string, never>> = () => {
	const editor = useSlateStatic();

	const [open, toggle] = useToggle();

	return (
		<Popover
			content={
				<Menu>
					{supportedLanguages.map(([name, slateType]) => (
						<Menu.Item
							key={slateType}
							onClick={() => {
								Transforms.insertNodes(editor, {
									type: slateType,
									children: [{ text: "" }]
								});

								toggle.off();
							}}
						>
							{name}
						</Menu.Item>
					))}
				</Menu>
			}
			onClose={toggle.off}
			open={open}
			placement="bottom"
		>
			<ToolbarButton onClick={toggle.on} title="Code">
				<CodeIcon height={16} width={16} />
			</ToolbarButton>
		</Popover>
	);
};

export type CodeBlockProps = RenderElementProps;

export const CodeBlock: FC<CodeBlockProps> = (props) => {
	const { attributes, children, element } = props;

	const readOnly = useReadOnly();
	const selected = useSelected();
	const editor = useSlateStatic();

	const [code, setCode] = useState<string>(Node.string(element));

	return (
		<Root
			{...attributes}
			contentEditable={false}
			style={shadesOfPurple.plain as any}
			$selected={selected}
		>
			<StyledCodeEditor
				highlight={(value) => (
					<Highlight {...defaultProps} code={value} language="tsx" theme={shadesOfPurple}>
						{({ tokens, getLineProps, getTokenProps }) =>
							tokens.map((line, i) => (
								<Line key={i} {...getLineProps({ line, key: i })}>
									<LineContent>
										{line.map((token, key) => (
											<span key={key} {...getTokenProps({ token, key })} />
										))}
									</LineContent>
								</Line>
							))
						}
					</Highlight>
				)}
				name="code-block"
				onBlur={() => {
					const path = ReactEditor.findPath(editor, element);

					Transforms.removeNodes(editor, { at: path });
					Transforms.insertNodes(
						editor,
						{ ...element, children: [{ text: code }] },
						{ at: path }
					);
				}}
				onValueChange={(newValue) => {
					setCode(newValue);
				}}
				padding={"0.5rem"}
				readOnly={readOnly}
				value={code}
			/>
			{children}
		</Root>
	);
};

CodeBlock.displayName = "CodeBlock";
