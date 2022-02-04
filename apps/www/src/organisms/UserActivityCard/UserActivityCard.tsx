import React, { CSSProperties, forwardRef } from "react";
import {
	UserActivityCardCommentPostUserActivityCommentPostFragment,
	UserActivityCardFollowSkillUserActivityFollowSkillFragment,
	UserActivityCardFollowUserUserActivityFollowUserFragment,
	UserActivityCardFriendAcceptUserUserActivityFriendAcceptUserFragment,
	UserActivityCardJoinedUserActivityJoinedFragment,
	UserActivityCardPublishPostUserActivityPublishPostFragment,
	UserActivityCardUpvotePostUserActivityUpvotePostFragment
} from "../../graphql";
import { UserActivityCardCommentPost } from "../UserActivityCardCommentPost";
import { UserActivityCardFollowSkill } from "../UserActivityCardFollowSkill";
import { UserActivityCardFollowUser } from "../UserActivityCardFollowUser";
import { UserActivityCardFriendAcceptUser } from "../UserActivityCardFriendAcceptUser";
import { UserActivityCardJoined } from "../UserActivityCardJoined";
import { UserActivityCardPublishPost } from "../UserActivityCardPublishPost";
import { UserActivityCardUpvotePost } from "../UserActivityCardUpvotePost";

export interface UserActivityCardProps {
	className?: string;
	style?: CSSProperties;
	userActivity:
		| UserActivityCardCommentPostUserActivityCommentPostFragment
		| UserActivityCardFollowSkillUserActivityFollowSkillFragment
		| UserActivityCardFollowUserUserActivityFollowUserFragment
		| UserActivityCardFriendAcceptUserUserActivityFriendAcceptUserFragment
		| UserActivityCardJoinedUserActivityJoinedFragment
		| UserActivityCardPublishPostUserActivityPublishPostFragment
		| UserActivityCardUpvotePostUserActivityUpvotePostFragment;
}

export const UserActivityCard = forwardRef<HTMLDivElement, UserActivityCardProps>((props, ref) => {
	const { className, style, userActivity } = props;

	switch (userActivity.__typename) {
		case "UserActivityCommentPost":
			return (
				<UserActivityCardCommentPost
					ref={ref}
					className={className}
					style={style}
					userActivity={userActivity}
				/>
			);
		case "UserActivityFollowSkill":
			return (
				<UserActivityCardFollowSkill
					ref={ref}
					className={className}
					style={style}
					userActivity={userActivity}
				/>
			);
		case "UserActivityFollowUser":
			return (
				<UserActivityCardFollowUser
					ref={ref}
					className={className}
					style={style}
					userActivity={userActivity}
				/>
			);
		case "UserActivityFriendAcceptUser":
			return (
				<UserActivityCardFriendAcceptUser
					ref={ref}
					className={className}
					style={style}
					userActivity={userActivity}
				/>
			);
		case "UserActivityJoined":
			return (
				<UserActivityCardJoined
					ref={ref}
					className={className}
					style={style}
					userActivity={userActivity}
				/>
			);
		case "UserActivityPublishPost":
			return (
				<UserActivityCardPublishPost
					ref={ref}
					className={className}
					style={style}
					userActivity={userActivity}
				/>
			);
		case "UserActivityUpvotePost":
			return (
				<UserActivityCardUpvotePost
					ref={ref}
					className={className}
					style={style}
					userActivity={userActivity}
				/>
			);
		default:
			return <div ref={ref} />;
	}
});

UserActivityCard.displayName = "UserActivityCard";
