import clsx from "clsx";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";
import React, { CSSProperties, forwardRef, useMemo } from "react";
import tw, { styled } from "twin.macro";

const Root = styled.pre`
	${tw`
		border
		border-solid
		border-gray-200
		rounded-md
		p-2
		overflow-auto
		text-sm
		font-mono
	`}
	tab-size: 4;
`;

const LineNo = styled.span`
	${tw`
		table-cell
		text-right
		select-none
		opacity-50
	`}
	padding-right: 1em;
`;

const Line = tw.div`
	table-row
`;

const LineContent = tw.span`
	table-cell
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
