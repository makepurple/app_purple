import React, { CSSProperties, forwardRef } from "react";
import {
	UserActivityCardCommentCodeExampleUserActivityCommentCodeExampleFragment,
	UserActivityCardCommentPostUserActivityCommentPostFragment,
	UserActivityCardCreateCodeExampleUserActivityCreateCodeExampleFragment,
	UserActivityCardFollowSkillUserActivityFollowSkillFragment,
	UserActivityCardFollowUserUserActivityFollowUserFragment,
	UserActivityCardFriendAcceptUserUserActivityFriendAcceptUserFragment,
	UserActivityCardJoinedUserActivityJoinedFragment,
	UserActivityCardPublishPostUserActivityPublishPostFragment,
	UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExampleFragment,
	UserActivityCardUpvotePostUserActivityUpvotePostFragment
} from "../../graphql";
import { UserActivityCardCommentCodeExample } from "../UserActivityCardCommentCodeExample";
import { UserActivityCardCommentPost } from "../UserActivityCardCommentPost";
import { UserActivityCardCreateCodeExample } from "../UserActivityCardCreateCodeExample";
import { UserActivityCardFollowSkill } from "../UserActivityCardFollowSkill";
import { UserActivityCardFollowUser } from "../UserActivityCardFollowUser";
import { UserActivityCardFriendAcceptUser } from "../UserActivityCardFriendAcceptUser";
import { UserActivityCardJoined } from "../UserActivityCardJoined";
import { UserActivityCardPublishPost } from "../UserActivityCardPublishPost";
import { UserActivityCardUpvoteCodeExample } from "../UserActivityCardUpvoteCodeExample";
import { UserActivityCardUpvotePost } from "../UserActivityCardUpvotePost";

export interface UserActivityCardProps {
	className?: string;
	style?: CSSProperties;
	userActivity:
		| UserActivityCardCommentCodeExampleUserActivityCommentCodeExampleFragment
		| UserActivityCardCommentPostUserActivityCommentPostFragment
		| UserActivityCardCreateCodeExampleUserActivityCreateCodeExampleFragment
		| UserActivityCardFollowSkillUserActivityFollowSkillFragment
		| UserActivityCardFollowUserUserActivityFollowUserFragment
		| UserActivityCardFriendAcceptUserUserActivityFriendAcceptUserFragment
		| UserActivityCardJoinedUserActivityJoinedFragment
		| UserActivityCardPublishPostUserActivityPublishPostFragment
		| UserActivityCardUpvoteCodeExampleUserActivityUpvoteCodeExampleFragment
		| UserActivityCardUpvotePostUserActivityUpvotePostFragment;
}

export const UserActivityCard = forwardRef<HTMLDivElement, UserActivityCardProps>((props, ref) => {
	const { className, style, userActivity } = props;

	switch (userActivity.__typename) {
		case "UserActivityCommentCodeExample":
			return (
				<UserActivityCardCommentCodeExample
					ref={ref}
					className={className}
					style={style}
					userActivity={userActivity}
				/>
			);
		case "UserActivityCommentPost":
			return (
				<UserActivityCardCommentPost
					ref={ref}
					className={className}
					style={style}
					userActivity={userActivity}
				/>
			);
		case "UserActivityCreateCodeExample":
			return (
				<UserActivityCardCreateCodeExample
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
		case "UserActivityUpvoteCodeExample":
			return (
				<UserActivityCardUpvoteCodeExample
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
