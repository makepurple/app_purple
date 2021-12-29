import { useContextMenu } from "@makepurple/hooks";
import { CodeBlockType } from "@makepurple/validators";
import composeRefs from "@seznam/compose-react-refs";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";
import React, { FC, useMemo, useRef, useState } from "react";
import CodeEditor from "react-simple-code-editor";
import { Descendant, Editor, Element, Node as SlateNode, Transforms } from "slate";
import { ReactEditor, RenderElementProps, useReadOnly, useSlateStatic } from "slate-react";
import tw, { styled } from "twin.macro";
import { ContextMenu, ContextMenuItem, ListItem, Menu } from "../../../atoms";
import { CodeSquareIcon } from "../../../svgs";
import { useInsertBlock } from "../hooks/useInsertBlock";
import { useIsBlockActive } from "../hooks/useIsBlockActive";
import { ToolbarButton } from "../Shared";

const Root = styled.div`
	${tw`
		border-2
		border-solid
		border-indigo-500
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

export type CodeBlockSlateType = CodeBlockType;

export type CodeBlockElement = {
	type: CodeBlockSlateType;
	children: Descendant[];
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
	["JavaScript", CodeBlockType.JavaScript],
	["TypeScript", CodeBlockType.TypeScript],
	["HTML", CodeBlockType.HTML],
	["CSS / SCSS", CodeBlockType.SCSS],
	["GraphQL", CodeBlockType.GraphQL],
	["Python", CodeBlockType.Python],
	["Go", CodeBlockType.Go],
	["SQL", CodeBlockType.SQL],
	["YAML", CodeBlockType.YAML]
];

export const CodeBlockToolbarButton: FC<Record<string, never>> = () => {
	const insertBlock = useInsertBlock();

	const isActive = useIsBlockActive();

	const isCodeBlockActive =
		isActive(CodeBlockType.Go) ||
		isActive(CodeBlockType.GraphQL) ||
		isActive(CodeBlockType.HTML) ||
		isActive(CodeBlockType.JavaScript) ||
		isActive(CodeBlockType.Python) ||
		isActive(CodeBlockType.SCSS) ||
		isActive(CodeBlockType.SQL) ||
		isActive(CodeBlockType.TypeScript) ||
		isActive(CodeBlockType.YAML);

	return (
		<Menu>
			<Menu.Button
				as={ToolbarButton}
				active={isCodeBlockActive}
				title="code block"
				aria-label="code block"
			>
				<CodeSquareIcon height={20} width={20} />
			</Menu.Button>
			<Menu.Items>
				{supportedLanguages.map(([name, slateType]) => (
					<Menu.Item key={slateType}>
						{(itemProps) => (
							<ListItem
								{...itemProps}
								onClick={() => {
									insertBlock({
										type: slateType,
										children: [{ text: "" }]
									});
								}}
								selected={isActive(slateType)}
							>
								{name}
							</ListItem>
						)}
					</Menu.Item>
				))}
			</Menu.Items>
		</Menu>
	);
};

export const CodeBlock: FC<RenderElementProps> = (props) => {
	const { attributes, children, element } = props;

	const readOnly = useReadOnly();
	const editor = useSlateStatic();

	const rootRef = useRef<HTMLDivElement>(null);
	const { contextMenuProps } = useContextMenu(rootRef);

	const composedRef = composeRefs(rootRef, attributes.ref);

	const [code, setCode] = useState<string>(SlateNode.string(element));

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
					if (code === SlateNode.string(element)) return;

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
				<ContextMenuItem
					onMouseDown={(event) => {
						event.preventDefault();

						const path = ReactEditor.findPath(editor, element);

						Transforms.removeNodes(editor, { at: path });
					}}
				>
					Delete
				</ContextMenuItem>
			</ContextMenu>
		</Root>
	);
};

CodeBlock.displayName = "CodeBlock";
