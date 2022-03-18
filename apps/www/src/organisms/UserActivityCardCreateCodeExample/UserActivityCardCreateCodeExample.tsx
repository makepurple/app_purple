import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { UserActivityCardCreateCodeExampleUserActivityCreateCodeExampleFragment } from "../../graphql";
import { CodeExampleCard } from "../CodeExampleCard";
import { UserActivityCardHeader } from "../UserActivityCardHeader";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

export interface UserActivityCardCreateCodeExampleProps {
	className?: string;
	style?: CSSProperties;
	userActivity: UserActivityCardCreateCodeExampleUserActivityCreateCodeExampleFragment;
}

export const UserActivityCardCreateCodeExample = forwardRef<
	HTMLDivElement,
	UserActivityCardCreateCodeExampleProps
>((props, ref) => {
	const { className, style, userActivity } = props;

	const codeExample = userActivity.codeExample;

	return (
		<Root ref={ref} className={className} style={style}>
			<UserActivityCardHeader userActivity={userActivity}>
				created a snippet
			</UserActivityCardHeader>
			<CodeExampleCard codeExample={codeExample} tw="mt-2" />
		</Root>
	);
});

UserActivityCardCreateCodeExample.displayName = "UserActivityCardCreateCodeExample";
