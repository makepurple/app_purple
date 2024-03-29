import type { Token } from "prismjs";

/**
 * !HACK
 * @description This module was mostly forked from prism-react-renderer for the sake of feature
 * and render pairity. It is absolutely shit. Good luck deciphering this.
 * @author David Lee
 * @date April 3, 2022
 */

export type NormalizedToken = {
	types: string[];
	content: string | undefined;
	empty?: boolean;
};

const newlineRe = /\r\n|\r|\n/;

const appendTypes = (types: string[], add: string[] | string): string[] => {
	const typesSize = types.length;
	if (typesSize > 0 && types[typesSize - 1] === add) {
		return types;
	}

	return types.concat(add);
};

// Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become
export const normalizeTokens = (tokens: (Token | string)[]): NormalizedToken[][] => {
	const typeArrStack: string[][] = [[]];
	const tokenArrStack = [tokens];
	const tokenArrIndexStack = [0];
	const tokenArrSizeStack = [tokens.length];

	let i = 0;
	let stackIndex = 0;
	let currentLine: NormalizedToken[] = [];

	const acc = [currentLine];

	while (stackIndex > -1) {
		while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
			let content;
			let types = typeArrStack[stackIndex];

			const tokenArr = tokenArrStack[stackIndex];
			const token = tokenArr[i];

			// Determine content and append type to types if necessary
			if (typeof token === "string") {
				types = stackIndex > 0 ? types : ["plain"];
				content = token;
			} else {
				types = appendTypes(types, token.type);
				if (token.alias) {
					types = appendTypes(types, token.alias);
				}

				content = token.content;
			}

			// If token.content is an array, increase the stack depth and repeat this while-loop
			if (typeof content !== "string") {
				stackIndex++;
				typeArrStack.push(types);
				tokenArrStack.push(content);
				tokenArrIndexStack.push(0);
				tokenArrSizeStack.push(content.length);
				continue;
			}

			// Split by newlines
			const splitByNewlines = content.split(newlineRe);
			const newlineCount = splitByNewlines.length;

			currentLine.push({ types, content: splitByNewlines[0] });

			// Create a new line for each string on a new line
			for (let j = 1; j < newlineCount; j++) {
				acc.push((currentLine = []));
				currentLine.push({
					types,
					content: splitByNewlines[j]
				});
			}
		}

		// Decreate the stack depth
		stackIndex--;
		typeArrStack.pop();
		tokenArrStack.pop();
		tokenArrIndexStack.pop();
		tokenArrSizeStack.pop();
	}

	return acc;
};
