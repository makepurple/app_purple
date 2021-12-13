import { extractCss, setup } from "goober";
import juice from "juice";
import { Mjml2HtmlOptions, render } from "mjml-react";
import { ComponentType, createElement } from "react";

export const createHtmlEmail = <P extends Record<string, unknown>>(
	template: ComponentType<P>,
	props: P,
	options: Mjml2HtmlOptions = {}
) => {
	setup(createElement);

	const element = createElement(template, props);

	const { html, errors } = render(element, options);

	if (errors?.length) {
		throw new Error(errors[0].formattedMessage);
	}

	const css = extractCss();

	const withStyleHead = html.replace(/\/\* inject css here \*\//g, css);
	const withInlinedStyles = juice(withStyleHead);

	return withInlinedStyles;
};
