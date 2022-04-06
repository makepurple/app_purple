import { Menu } from "@headlessui/react";
import { WindowUtils } from "@makepurple/utils";
import { CodeBlockType } from "@makepurple/validators";
import copyToClipboard from "copy-to-clipboard";
import React, { FC, Fragment, useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { Descendant, Text as SlateText, Transforms } from "slate";
import { ReactEditor, RenderElementProps, useReadOnly, useSlateStatic } from "slate-react";
import tw from "twin.macro";
import { ListItem, toast } from "../../../../atoms";
import { CodeSquareIcon, CopyIcon, XIcon } from "../../../../svgs";
import { CodeBlockTheme } from "../../../CodeBlock";
import { useInsertBlock } from "../../hooks/useInsertBlock";
import { useIsBlockActive } from "../../hooks/useIsBlockActive";
import { useToggleBlock } from "../../hooks/useToggleBlock";
import { ToolbarButton } from "../../Shared";

export type { NormalizedToken } from "./normalizeTokens";
export { normalizeTokens } from "./normalizeTokens";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

const Info = tw.div`
	flex
	flex-row
	items-center
	h-8
	pl-2
	rounded-t-md
	bg-indigo-500
	text-white
	font-semibold
	z-index[1]
`;

const LanguageName = tw.div`
	flex-grow
`;

const ActionButton = tw.button`
	flex-shrink-0
	flex
	items-center
	justify-center
	h-8
	w-8
	rounded-md
	cursor-pointer
	disabled:cursor-not-allowed
`;

const Pre = tw.pre`
	p-2
	rounded-b-md
	overflow-auto
	text-sm
	font-mono
	tab-size[4]
`;

export type CodeBlockSlateType = CodeBlockType;

export type CodeBlockElement = {
	type: CodeBlockSlateType;
	children: Descendant[];
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

const LanguageItems = tw.div`
	inline-flex
	flex-col
	items-stretch
	mt-1
	p-0.5
	rounded-lg
	bg-white
	shadow-2xl
	z-10
`;

export const CodeBlockToolbarButton: FC<Record<string, never>> = () => {
	const insertBlock = useInsertBlock();
	const toggleBlock = useToggleBlock();

	const [reference, referenceRef] = useState<HTMLButtonElement | null>(null);
	const [popper, popperRef] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(reference, popper, {
		placement: "bottom-start"
	});

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
		<Menu as={Fragment}>
			<Menu.Button
				as={ToolbarButton}
				ref={referenceRef}
				active={isCodeBlockActive}
				title="code block"
				aria-label="code block"
			>
				<CodeSquareIcon height={20} width={20} />
			</Menu.Button>
			{WindowUtils.isBrowser() &&
				createPortal(
					<Menu.Items
						as={LanguageItems}
						ref={popperRef}
						style={styles.popper}
						{...attributes.popper}
					>
						{supportedLanguages.map(([name, slateType]) => (
							<Menu.Item key={slateType}>
								{(itemProps) => (
									<ListItem
										{...itemProps}
										onClick={() => {
											if (!isCodeBlockActive) {
												insertBlock({
													type: slateType,
													children: [{ text: "" }]
												});

												return;
											}

											toggleBlock(slateType);
										}}
										selected={isActive(slateType)}
									>
										{name}
									</ListItem>
								)}
							</Menu.Item>
						))}
					</Menu.Items>,
					document.body
				)}
		</Menu>
	);
};

export const CodeBlock: FC<RenderElementProps> = (props) => {
	const { attributes, children, element } = props;

	const readOnly = useReadOnly();
	const editor = useSlateStatic();

	const [languageName] = useMemo(
		() => supportedLanguages.find(([, type]) => type === element.type) ?? supportedLanguages[0],
		[element.type]
	);

	const deleteSelf = useCallback(() => {
		const path = ReactEditor.findPath(editor, element);

		Transforms.removeNodes(editor, { at: path });
	}, [editor, element]);

	return (
		<Root {...attributes}>
			<Info contentEditable={false}>
				<LanguageName>{languageName}</LanguageName>
				<ActionButton
					onClick={(e) => {
						e.preventDefault();

						if (!readOnly) {
							deleteSelf();

							return;
						}

						const node = element.children[0];

						if (!node) return;
						if (!SlateText.isText(node)) return;

						copyToClipboard(node.text);

						toast.success("Copied!");
					}}
					type="button"
					aria-label="copy"
				>
					{readOnly ? (
						<CopyIcon height={24} width={24} />
					) : (
						<XIcon height={24} width={24} />
					)}
				</ActionButton>
			</Info>
			<Pre spellCheck={false} style={CodeBlockTheme.plain}>
				{children}
			</Pre>
			{/* <EditorWrapper ref={composedRef} style={CodeBlockTheme.plain as any}>
				<StyledCodeEditor
					disabled={readOnly}
					highlight={(value) => (
						<Highlight
							{...defaultProps}
							code={value}
							language={language}
							theme={CodeBlockTheme}
						>
							{({ tokens, getLineProps, getTokenProps }) =>
								tokens.map((line, i) => (
									<Line key={i} {...getLineProps({ line, key: i })}>
										<LineContent>
											{line.map((token, key) => (
												<span
													key={key}
													{...getTokenProps({ token, key })}
												/>
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
					onKeyDown={onArrowDown as any}
					onValueChange={(newValue) => {
						setCode(newValue);
					}}
					padding={"0.5rem"}
					placeholder="// Write some code here!"
					readOnly={readOnly}
					value={code}
					aria-label="code block editor"
					aria-readonly={readOnly}
				/>
			</EditorWrapper> */}
		</Root>
	);
};

CodeBlock.displayName = "CodeBlock";