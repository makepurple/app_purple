import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { UserActivityCardPublishPostUserActivityPublishPostFragment } from "../../graphql";
import { PostCard } from "../PostCard";
import { UserActivityCardHeader } from "../UserActivityCardHeader";

const Root = tw.div`
	flex
	flex-col
	items-start
`;

export interface UserActivityCardPublishPostProps {
	className?: string;
	style?: CSSProperties;
	userActivity: UserActivityCardPublishPostUserActivityPublishPostFragment;
}

export const UserActivityCardPublishPost = forwardRef<
	HTMLDivElement,
	UserActivityCardPublishPostProps
>((props, ref) => {
	const { className, style, userActivity } = props;

	const { post } = userActivity;

	return (
		<Root ref={ref} className={className} style={style}>
			<UserActivityCardHeader userActivity={userActivity}>
				published a new post
			</UserActivityCardHeader>
			<PostCard post={post} tw="mt-2" />
		</Root>
	);
});

UserActivityCardPublishPost.displayName = "UserActivityCardPublishPost";
