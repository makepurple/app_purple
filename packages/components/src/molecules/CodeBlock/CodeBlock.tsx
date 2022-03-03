import Highlight, { defaultProps, Language, PrismTheme } from "prism-react-renderer";
import React, { CSSProperties, FC } from "react";
import tw, { styled } from "twin.macro";

const Root = tw.div`
	flex
	flex-col
	items-stretch
	border-2
	border-solid
	border-indigo-500
	rounded-md
	overflow-hidden
`;

const Info = tw.div`
	flex
	flex-row
	items-center
	h-8
	pl-2
	bg-indigo-500
	text-white
	font-semibold
`;

const LanguageName = tw.div`
	flex-grow
`;

const Editor = styled.pre`
	${tw`
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

export const CodeBlockTheme: PrismTheme = {
	plain: {
		color: "rgba(221, 221, 221)",
		backgroundColor: "#0D1217"
	},
	styles: [
		{
			types: ["prolog", "constant"],
			style: {
				// #bd93f9
				color: "rgb(189, 147, 249)"
			}
		},
		{
			types: ["builtin"],
			style: {
				// #36acaa
				color: "rgb(54, 172, 170)",
				fontWeight: "bold"
			}
		},
		{
			types: ["inserted"],
			style: {
				// #50fa7b
				color: "rgb(80, 250, 123)"
			}
		},
		{
			types: ["deleted"],
			style: {
				// #ff5555
				color: "rgb(255, 85, 85)"
			}
		},
		{
			types: ["changed"],
			style: {
				// #ffb86c
				color: "rgb(255, 184, 108)"
			}
		},
		{
			types: ["punctuation", "symbol"],
			style: {
				// #dddddd
				color: "rgba(221, 221, 221)"
			}
		},
		{
			types: ["selector"],
			style: {
				// #ff79c6
				color: "rgb(255, 121, 198)"
			}
		},
		{
			types: ["keyword"],
			style: {
				// #ff5aa7
				color: "rgb(255, 90, 167)",
				fontWeight: "bold"
			}
		},
		{
			types: ["null", "nil"],
			style: {
				// #d9931e
				color: "rgb(217, 147, 30)",
				fontWeight: "bold"
			}
		},
		{
			types: ["variable"],
			style: {
				// #bd93f9
				color: "rgb(189, 147, 249)",
				fontStyle: "italic"
			}
		},
		{
			types: ["comment"],
			style: {
				// #888888
				color: "rgb(136, 136, 136)"
			}
		},
		{
			types: ["attr-name"],
			style: {
				// #d9931e
				color: "rgb(217, 147, 30)"
			}
		},
		{
			types: ["function", "maybe-class-name", "number", "tag"],
			style: {
				// #60a7fa
				color: "rgb(96, 167, 250)"
			}
		},
		{
			types: ["function-variable"],
			style: {
				// #dddddd
				color: "rgba(221, 221, 221)"
			}
		},
		{
			types: ["char", "string"],
			style: {
				// #2cb092
				color: "rgb(44, 176, 146)"
			}
		}
	]
};

export interface CodeBlockProps {
	children?: string;
	className?: string;
	code?: string;
	language?: Maybe<Language>;
	style?: CSSProperties;
	title?: string;
}

export const CodeBlock: FC<CodeBlockProps> = (props) => {
	const {
		children = "",
		className,
		language: _language = "markdown",
		style,
		title,
		code = children,
		...restProps
	} = props;

	const language = _language ?? "markdown";

	return (
		<Root className={className} style={style}>
			{!!title && (
				<Info>
					<LanguageName>{title}</LanguageName>
				</Info>
			)}
			<Highlight
				{...defaultProps}
				code={code.trim()}
				language={language}
				theme={CodeBlockTheme}
			>
				{(highlight) => (
					<Editor {...restProps} className={highlight.className} style={highlight.style}>
						{highlight.tokens.map((line, i) => (
							<Line key={i} {...highlight.getLineProps({ line, key: i })}>
								<LineNo>{i + 1}</LineNo>
								<LineContent>
									{line.map((token, key) => (
										<span
											key={key}
											{...highlight.getTokenProps({ token, key })}
										/>
									))}
								</LineContent>
							</Line>
						))}
					</Editor>
				)}
			</Highlight>
		</Root>
	);
};
