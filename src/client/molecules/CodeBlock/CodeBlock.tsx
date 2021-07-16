import clsx from "clsx";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";
import React, { CSSProperties, forwardRef, useMemo } from "react";
import styled from "styled-components";

const Root = styled.pre`
	border: 1px solid ${({ theme }) => theme.palette.lightGrey};
	border-radius: 0.375rem;
	padding: 0.5em;
	overflow: auto;
	font-size: 0.875rem;
	font-family: "Source Code Pro", "Consolas", "Monaco", "Menlo", "Mono", "DejaVu Sans Mono",
		"Bitstream Vera Sans Mono", "Liberation Mono", "Courier New", Courier, monospace;
	tab-size: 4;
`;

const LineNo = styled.span`
	display: table-cell;
	text-align: right;
	padding-right: 1em;
	user-select: none;
	opacity: 0.5;
`;

const Line = styled.div`
	display: table-row;
`;

const LineContent = styled.span`
	display: table-cell;
`;

export interface CodeBlockProps {
	children?: string;
	className?: string;
	code?: string;
	language?: Language;
	style?: CSSProperties;
}

export const CodeBlock = forwardRef<HTMLPreElement, CodeBlockProps>((props, ref) => {
	const {
		children = "",
		className: _className = "language-tsx",
		language: _language,
		style: _style,
		code = children,
		...restProps
	} = props;

	const language = useMemo(
		() => _language ?? _className.replace(/language-/, ""),
		[_className, _language]
	) as Language;

	return (
		<Highlight {...defaultProps} code={code.trim()} language={language} theme={shadesOfPurple}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<Root
					{...restProps}
					ref={ref}
					className={clsx({ [code]: _className }, className)}
					style={style}
				>
					{tokens.map((line, i) => (
						<Line key={i} {...getLineProps({ line, key: i })}>
							<LineNo>{i + 1}</LineNo>
							<LineContent>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</LineContent>
						</Line>
					))}
				</Root>
			)}
		</Highlight>
	);
});

CodeBlock.displayName = "CodeBlock";
