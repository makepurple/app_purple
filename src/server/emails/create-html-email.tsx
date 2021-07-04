import { Mjml2HtmlOptions, render } from "mjml-react";
import { ComponentType, createElement } from "react";
import { ServerStyleSheet } from "styled-components";

const getStyledComponentsStaticCss = (sheet): string => {
	/* eslint-disable @typescript-eslint/no-unsafe-assignment */
	/* eslint-disable @typescript-eslint/no-unsafe-call */
	/* eslint-disable @typescript-eslint/no-unsafe-return */
	const tag = sheet.getTag();

	return [...Array(tag.length).keys()].map((group) => tag.getGroup(group)).join("");
};

export const createHtmlEmail = <P extends Record<string, unknown>>(
	template: ComponentType<P>,
	props: P,
	options: Mjml2HtmlOptions = { minify: true }
) => {
	const sheet = new ServerStyleSheet();
	const element = createElement(template, props);
	const elementWithCollectedStyles = sheet.collectStyles(element);

	const { html, errors } = render(elementWithCollectedStyles, options);

	if (errors?.length) {
		throw new Error(errors[0].formattedMessage);
	}

	const css = getStyledComponentsStaticCss(sheet.instance);

	return html.replace(/\/\* inject css here \*\//g, css);
};
