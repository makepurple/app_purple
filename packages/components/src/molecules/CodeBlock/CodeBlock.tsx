import Highlight, { defaultProps, Language } from "prism-react-renderer";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";
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

export interface CodeBlockProps {
	children?: string;
	className?: string;
	code?: string;
	language?: Language;
	languageName?: string;
	style?: CSSProperties;
}

export const CodeBlock: FC<CodeBlockProps> = (props) => {
	const {
		children = "",
		className = "language-tsx",
		language = "tsx",
		languageName,
		style,
		code = children,
		...restProps
	} = props;

	return (
		<Root className={className} style={style}>
			{!!languageName && (
				<Info>
					<LanguageName>{languageName}</LanguageName>
				</Info>
			)}
			<Highlight
				{...defaultProps}
				code={code.trim()}
				language={language}
				theme={shadesOfPurple}
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
