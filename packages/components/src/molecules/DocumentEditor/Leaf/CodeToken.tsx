import React from "react";
import { RenderLeafProps } from "slate-react";
import { CodeBlockTheme } from "../../CodeBlock";
import type { NormalizedToken } from "../Element/CodeBlock";

const themeToDict = () => {
	const { plain } = CodeBlockTheme;

	const themeDict = CodeBlockTheme.styles.reduce((acc, themeEntry) => {
		const { style } = themeEntry;

		themeEntry.types.forEach((type) => {
			const accStyle = { ...acc[type], ...style };

			acc[type] = accStyle;
		});

		return acc;
	}, {} as Record<string, any>);

	themeDict.root = plain;
	themeDict.plain = { ...plain, backgroundColor: null };

	return themeDict;
};

const getStyleForToken = (token: NormalizedToken) => {
	const { types, empty } = token;
	const themeDict = themeToDict();

	if (types.length === 1) {
		if (types[0] === "plain") {
			return empty ? { display: "inline-block" } : undefined;
		}

		if (!empty) {
			return themeDict[types[0]];
		}
	}

	const baseStyle = empty ? { display: "inline-block" } : {};
	const typeStyles = types.map((type) => themeDict[type]);

	return Object.assign(baseStyle, ...typeStyles);
};

export const wrapLeafCodeToken = (props: RenderLeafProps) => {
	const { attributes, children, leaf } = props;

	if (!leaf.codeToken) return { children, leaf };

	const style = getStyleForToken(leaf.codeToken);

	return {
		children: (
			<span
				{...attributes}
				className={`token ${leaf.codeToken.types.join(" ")}`}
				style={style}
			>
				{children}
			</span>
		),
		leaf
	};
};
