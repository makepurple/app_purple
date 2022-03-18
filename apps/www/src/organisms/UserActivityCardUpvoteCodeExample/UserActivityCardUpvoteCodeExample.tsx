import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExampleFragment } from "../../graphql";
import { CodeExampleCard } from "../CodeExampleCard";
import { UserActivityCardHeader } from "../UserActivityCardHeader";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

export interface UserActivityCardUpvoteCodeExampleProps {
	className?: string;
	style?: CSSProperties;
	userActivity: UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExampleFragment;
}

export const UserActivityCardUpvoteCodeExample = forwardRef<
	HTMLDivElement,
	UserActivityCardUpvoteCodeExampleProps
>((props, ref) => {
	const { className, style, userActivity } = props;

	const codeExample = userActivity.codeExample;

	return (
		<Root ref={ref} className={className} style={style}>
			<UserActivityCardHeader userActivity={userActivity}>
				upvoted a snippet
			</UserActivityCardHeader>
			<CodeExampleCard codeExample={codeExample} tw="mt-2" />
		</Root>
	);
});

UserActivityCardUpvoteCodeExample.displayName = "UserActivityCardUpvoteCodeExample";
