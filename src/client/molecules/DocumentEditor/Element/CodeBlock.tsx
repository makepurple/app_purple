import { Menu, Popover } from "@/client/atoms";
import { useContextMenu, useInsertBlock, useToggle } from "@/client/hooks";
import { ContextMenu } from "@/client/molecules/ContextMenu";
import { ToolbarButton } from "@/client/molecules/DocumentEditor/Shared";
import { CodeSquareIcon } from "@/client/svgs";
import composeRefs from "@seznam/compose-react-refs";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";
import React, { FC, useMemo, useRef, useState } from "react";
import CodeEditor from "react-simple-code-editor";
import { Editor, Element, Node, Transforms } from "slate";
import { ReactEditor, RenderElementProps, useReadOnly, useSlateStatic } from "slate-react";
import tw, { styled } from "twin.macro";

const Root = styled.div`
	${tw`
		border-2
		border-solid
		border-purple-500
		rounded-md
		overflow-auto
		text-sm
		font-mono
	`}
	tab-size: 4;
`;

const StyledCodeEditor = styled(CodeEditor)`
	${tw`
		select-none
		pointer-events-none
	`}

	& textarea {
		${tw`
			select-auto
			pointer-events-auto
		`}
	}
`;

const Line = tw.span`
	table-row
`;

const LineContent = tw.span`
	table-cell
`;

export type CodeBlockSlateType = `language-${Language}`;

export type CodeBlockElement = {
	type: CodeBlockSlateType;
	children: [{ text: string }];
};

export const withCodeBlock = (editor: Editor): Editor => {
	const { isVoid } = editor;

	editor.isVoid = (element: Element): boolean => {
		return element.type.startsWith("language-") ? true : isVoid(element);
	};

	return editor;
};

type CodeBlockLanguageOption = [name: string, slateType: CodeBlockSlateType];

const supportedLanguages: readonly CodeBlockLanguageOption[] = [
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
	const insertBlock = useInsertBlock();

	const [open, toggle] = useToggle(false);

	return (
		<Popover
			content={
				<Menu>
					{supportedLanguages.map(([name, slateType]) => (
						<Menu.Item
							key={slateType}
							onClick={() => {
								insertBlock({
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
			<ToolbarButton onClick={toggle.on} title="code block" aria-label="code block">
				<CodeSquareIcon height={20} width={20} />
			</ToolbarButton>
		</Popover>
	);
};

export const CodeBlock: FC<RenderElementProps> = (props) => {
	const { attributes, children, element } = props;

	const readOnly = useReadOnly();
	const editor = useSlateStatic();

	const rootRef = useRef<HTMLDivElement>(null);
	const { contextMenuProps } = useContextMenu(rootRef);

	const composedRef = composeRefs(rootRef, attributes.ref);

	const [code, setCode] = useState<string>(Node.string(element));

	const language = useMemo(
		() => element.type.split("-").slice(-1)[0] as Language,
		[element.type]
	);

	return (
		<Root
			{...attributes}
			ref={composedRef}
			contentEditable={false}
			style={shadesOfPurple.plain as any}
		>
			<StyledCodeEditor
				highlight={(value) => (
					<Highlight
						{...defaultProps}
						code={value}
						language={language}
						theme={shadesOfPurple}
					>
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
					if (code === Node.string(element)) return;

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
			<ContextMenu contentEditable={false} {...contextMenuProps}>
				<ContextMenu.Item
					onMouseDown={(event) => {
						event.preventDefault();

						const path = ReactEditor.findPath(editor, element);

						Transforms.removeNodes(editor, { at: path });
					}}
				>
					Delete
				</ContextMenu.Item>
			</ContextMenu>
		</Root>
	);
};

CodeBlock.displayName = "CodeBlock";
