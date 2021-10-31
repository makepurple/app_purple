import React from "react";
import { RenderPlaceholderProps } from "slate-react";

export const Placeholder = (props: RenderPlaceholderProps) => {
	const { attributes, children } = props;

	return (
		<p {...attributes} role="presentation" aria-hidden>
			{children}
		</p>
	);
};
