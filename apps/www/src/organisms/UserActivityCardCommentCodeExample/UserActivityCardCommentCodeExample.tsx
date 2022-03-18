import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { UserActivityCardCommentCodeExampleUserActivityCommentCodeExampleFragment } from "../../graphql";
import { CodeExampleCard } from "../CodeExampleCard";
import { UserActivityCardHeader } from "../UserActivityCardHeader";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

export interface UserActivityCardCommentCodeExampleProps {
	className?: string;
	style?: CSSProperties;
	userActivity: UserActivityCardCommentCodeExampleUserActivityCommentCodeExampleFragment;
}

export const UserActivityCardCommentCodeExample = forwardRef<
	HTMLDivElement,
	UserActivityCardCommentCodeExampleProps
>((props, ref) => {
	const { className, style, userActivity } = props;

	const comment = userActivity.comment;
	const codeExample = comment.codeExample;

	if (!codeExample) return <div ref={ref} />;

	return (
		<Root ref={ref} className={className} style={style}>
			<UserActivityCardHeader userActivity={userActivity}>
				commented on a snippet
			</UserActivityCardHeader>
			<CodeExampleCard codeExample={codeExample} tw="mt-2" />
		</Root>
	);
});

UserActivityCardCommentCodeExample.displayName = "UserActivityCardCommentCodeExample";
