import { Menu } from "@headlessui/react";
import { useContextMenu, useOnKeyDown } from "@makepurple/hooks";
import { WindowUtils } from "@makepurple/utils";
import { CodeBlockType } from "@makepurple/validators";
import composeRefs from "@seznam/compose-react-refs";
import copyToClipboard from "copy-to-clipboard";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import React, {
	FC,
	Fragment,
	KeyboardEvent,
	useCallback,
	useContext,
	useMemo,
	useRef,
	useState
} from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import CodeEditor from "react-simple-code-editor";
import { Descendant, Editor, Element, Node as SlateNode, Path, Transforms } from "slate";
import { ReactEditor, RenderElementProps, useReadOnly, useSlateStatic } from "slate-react";
import tw from "twin.macro";
import { ContextMenu, ContextMenuItem, ListItem, toast } from "../../../atoms";
import { CodeSquareIcon, CopyIcon, XIcon } from "../../../svgs";
import { CodeBlockTheme } from "../../CodeBlock";
import { DocumentEditorContext } from "../context";
import { useGetNode } from "../hooks/useGetNode";
import { useInsertBlock } from "../hooks/useInsertBlock";
import { useIsBlockActive } from "../hooks/useIsBlockActive";
import { ToolbarButton } from "../Shared";

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

const EditorWrapper = tw.div`
	rounded-b-md
	overflow-auto
	text-sm
	font-mono
	tab-size[4]
`;

const StyledCodeEditor = tw(CodeEditor)`
	select-none
	pointer-events-none
	[& textarea]:select-auto
	[& textarea]:pointer-events-auto
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

const LanguageItems = tw.div`
	inline-flex
	flex-col
	items-stretch
	mt-1
	p-0.5
	rounded-lg
	bg-white
	shadow-2xl
`;

export const CodeBlockToolbarButton: FC<Record<string, never>> = () => {
	const insertBlock = useInsertBlock();

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
	const getNode = useGetNode();
	const context = useContext(DocumentEditorContext);

	const rootRef = useRef<HTMLDivElement>(null);
	const { contextMenuProps } = useContextMenu(rootRef, { disabled: readOnly });

	const composedRef = composeRefs(rootRef, attributes.ref);

	const [code, setCode] = useState<string>(SlateNode.string(element));

	const language = useMemo(
		() => element.type.split("-").slice(-1)[0] as Language,
		[element.type]
	);

	const [languageName] = useMemo(
		() => supportedLanguages.find(([, type]) => type === element.type) ?? supportedLanguages[0],
		[element.type]
	);

	const deleteSelf = useCallback(() => {
		const path = ReactEditor.findPath(editor, element);

		Transforms.removeNodes(editor, { at: path });
	}, [editor, element]);

	const onArrowDown = useOnKeyDown({ key: "DOWN" }, (e: KeyboardEvent<HTMLTextAreaElement>) => {
		const textArea = e.target as HTMLTextAreaElement;
		const isCursorEnd = textArea.selectionEnd === textArea.value.length;

		if (!isCursorEnd) return;

		const entry = getNode(element.type);

		if (!entry) return;

		const [, path] = entry;

		const editable = context.editableRef.current;

		const [nextNode] = Editor.next(editor) ?? [];

		if (!nextNode) {
			Transforms.deselect(editor);
			Transforms.insertNodes(
				editor,
				{ type: "paragraph", children: [{ text: "" }] },
				{ at: Path.next(path), select: true }
			);
		}

		const [current] = Editor.node(editor, Path.next(path));

		setTimeout(() => {
			if (!editable || !current) return;

			const range = document.createRange();
			const selection = window.getSelection();

			const domCurrent = ReactEditor.toDOMNode(editor, current);

			range.setStart(domCurrent, 0);
			range.setEnd(domCurrent, 0);

			selection?.removeAllRanges();

			selection?.addRange(range);
		}, 0);
	});

	return (
		<Root {...attributes} contentEditable={false}>
			<Info>
				<LanguageName>{languageName}</LanguageName>
				<ActionButton
					onClick={(e) => {
						e.preventDefault();

						if (!readOnly) {
							deleteSelf();

							return;
						}

						copyToClipboard(code);

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
			<EditorWrapper ref={composedRef} style={CodeBlockTheme.plain as any}>
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
				<ContextMenu contentEditable={false} {...contextMenuProps}>
					<ContextMenuItem
						onMouseDown={(e) => {
							e.preventDefault();

							deleteSelf();
						}}
					>
						Delete
					</ContextMenuItem>
				</ContextMenu>
			</EditorWrapper>
			{children}
		</Root>
	);
};

CodeBlock.displayName = "CodeBlock";
