import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { UserActivityCardUpvotePostUserActivityUpvotePostFragment } from "../../graphql";
import { PostCard } from "../PostCard";
import { UserActivityCardHeader } from "../UserActivityCardHeader";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

export interface UserActivityCardUpvotePostProps {
	className?: string;
	style?: CSSProperties;
	userActivity: UserActivityCardUpvotePostUserActivityUpvotePostFragment;
}

export const UserActivityCardUpvotePost = forwardRef<
	HTMLDivElement,
	UserActivityCardUpvotePostProps
>((props, ref) => {
	const { className, style, userActivity } = props;

	const { post } = userActivity;

	return (
		<Root ref={ref} className={className} style={style}>
			<UserActivityCardHeader userActivity={userActivity}>
				upvoted a post
			</UserActivityCardHeader>
			<PostCard post={post} tw="mt-2" />
		</Root>
	);
});

UserActivityCardUpvotePost.displayName = "UserActivityCardUpvotePost";
