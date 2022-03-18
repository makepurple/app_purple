import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { UserActivityCardCommentPostUserActivityCommentPostFragment } from "../../graphql";
import { PostCard } from "../PostCard";
import { UserActivityCardHeader } from "../UserActivityCardHeader";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

export interface UserActivityCardCommentPostProps {
	className?: string;
	style?: CSSProperties;
	userActivity: UserActivityCardCommentPostUserActivityCommentPostFragment;
}

export const UserActivityCardCommentPost = forwardRef<
	HTMLDivElement,
	UserActivityCardCommentPostProps
>((props, ref) => {
	const { className, style, userActivity } = props;

	const { comment } = userActivity;
	const { post } = comment;

	/**
	 * !HACK
	 * @description Should not reach here, but in-case it does, return a div so that we don't break
	 * pagination. It does mean that there might be an unexpected gap though.
	 * @author David Lee
	 * @date February 3, 2022
	 */
	if (!post) return <div ref={ref} />;

	return (
		<Root ref={ref} className={className} style={style}>
			<UserActivityCardHeader userActivity={userActivity}>
				commented on a post
			</UserActivityCardHeader>
			<PostCard post={post} tw="mt-2" />
		</Root>
	);
});

UserActivityCardCommentPost.displayName = "UserActivityCardCommentPost";
