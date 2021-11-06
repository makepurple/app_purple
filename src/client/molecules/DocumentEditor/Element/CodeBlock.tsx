import { ContextMenu, ContextMenuItem, Menu, MenuItem } from "@/client/atoms";
import { useContextMenu, useInsertBlock, useOnClickOutside, useToggle } from "@/client/hooks";
import { ToolbarButton } from "@/client/molecules/DocumentEditor/Shared";
import { CodeSquareIcon } from "@/client/svgs";
import { CodeBlockType } from "@/validators";
import composeRefs from "@seznam/compose-react-refs";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";
import React, { FC, useMemo, useRef, useState } from "react";
import CodeEditor from "react-simple-code-editor";
import { MenuButton, useMenuState } from "reakit";
import { Descendant, Editor, Element, Node as SlateNode, Transforms } from "slate";
import { ReactEditor, RenderElementProps, useReadOnly, useSlateStatic } from "slate-react";
import tw, { styled } from "twin.macro";

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
	const menu = useMenuState({
		placement: "bottom-start"
	});

	const buttonRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	const [open, toggle] = useToggle(false);

	useOnClickOutside(buttonRef, (e) => {
		if (!menuRef.current || menuRef.current.contains(e.target as Node | null)) return;

		toggle.off();
	});

	return (
		<>
			<MenuButton
				as={ToolbarButton}
				ref={buttonRef}
				{...menu}
				onMouseDown={(event) => {
					event.preventDefault();

					toggle.on();
				}}
				title="code block"
				aria-label="code block"
			>
				<CodeSquareIcon height={20} width={20} />
			</MenuButton>
			<Menu ref={menuRef} {...menu} visible={open}>
				{supportedLanguages.map(([name, slateType]) => (
					<MenuItem
						key={slateType}
						{...menu}
						onClick={() => {
							insertBlock({
								type: slateType,
								children: [{ text: "" }]
							});

							toggle.off();
						}}
					>
						{name}
					</MenuItem>
				))}
			</Menu>
		</>
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
