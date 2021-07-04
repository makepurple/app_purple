import { Mjml2HtmlOptions, render } from "mjml-react";
import React, { ComponentType, createElement, FC } from "react";
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
	options: Mjml2HtmlOptions
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

export const withCssClass = <P extends { cssClass?: string }>(Component: ComponentType<P>) => {
	const wrappedComponent: FC<Omit<P, "cssClass"> & { className?: string }> = (props) => {
		const { className, ...restProps } = props;

		return <Component cssClass={className} {...(restProps as any)} />;
	};

	wrappedComponent.displayName = Component.displayName;

	return wrappedComponent;
};
