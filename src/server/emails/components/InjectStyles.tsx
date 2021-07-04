import { stripIndents as css } from "common-tags";
import { MjmlStyle } from "mjml-react";
import React, { FC } from "react";

export type InjectStylesProps = Record<string, never>;

export const InjectStyles: FC<InjectStylesProps> = () => {
	return (
		<MjmlStyle>
			{css`
				/* inject css here */
			`}
		</MjmlStyle>
	);
};
