import Highlight, { defaultProps, Language } from "prism-react-renderer";
import React, { CSSProperties, forwardRef, ReactNode, useContext } from "react";
import CodeEditor from "react-simple-code-editor";
import tw from "twin.macro";
import { FormContext } from "../../atoms/Form/context";
import { CodeBlockTheme } from "../CodeBlock/CodeBlock";

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
	rounded-t-md
	bg-brand
	text-white
	font-semibold
`;

const LanguageName = tw.div`
	flex-grow
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
	font-mono
	[& textarea]:select-auto
	[& textarea]:pointer-events-auto
`;

const Line = tw.span`
	table-row
	font-mono
`;

const LineContent = tw.span`
	table-cell
	font-mono
`;

export interface CodeBlockInputProps {
	className?: string;
	disabled?: boolean;
	language?: Language;
	name?: string;
	onChange: (value: string) => void;
	placeholder?: string;
	style?: CSSProperties;
	title?: ReactNode;
	value: string;
}

export const CodeBlockInput = forwardRef<HTMLDivElement, CodeBlockInputProps>((props, ref) => {
	const {
		className,
		disabled: _disabled,
		language = "markdown",
		name,
		onChange,
		placeholder,
		style,
		title,
		value
	} = props;

	const form = useContext(FormContext);

	const disabled = _disabled || form.disabled;

	return (
		<Root ref={ref} className={className} style={style}>
			{!!title && (
				<Info>
					<LanguageName>{title}</LanguageName>
				</Info>
			)}
			<EditorWrapper style={CodeBlockTheme.plain as any}>
				<StyledCodeEditor
					disabled={disabled}
					highlight={(code) => (
						<Highlight
							{...defaultProps}
							code={code}
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
					name={name}
					onValueChange={onChange}
					placeholder={placeholder}
					padding={"0.5rem"}
					value={value}
				/>
			</EditorWrapper>
		</Root>
	);
});

CodeBlockInput.displayName = "CodeBlockInput";
