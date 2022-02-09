import { CSSProperties, FC } from "react";
import { UserTrophyFollowers } from "./UserTrophyFollowers";
import { UserTrophyPostViews } from "./UserTrophyPostViews";
import { UserTrophySkills } from "./UserTrophySkills";
import { UserTrophyUpvotes } from "./UserTrophyUpvotes";
import { UserTrophyYearlyCommits } from "./UserTrophyYearlyCommits";
import { UserTrophyYearlyPosts } from "./UserTrophyYearlyPosts";

export interface UserTrophyProps {
	className?: string;
	style?: CSSProperties;
	type?: "followers" | "post-views" | "skills" | "upvotes" | "yearly-commits" | "yearly-posts";
	value: number;
}

export const UserTrophy: FC<UserTrophyProps> = ({ className, style, type, value }) => {
	switch (type) {
		case "followers":
			return <UserTrophyFollowers className={className} style={style} value={value} />;
		case "post-views":
			return <UserTrophyPostViews className={className} style={style} value={value} />;
		case "skills":
			return <UserTrophySkills className={className} style={style} value={value} />;
		case "upvotes":
			return <UserTrophyUpvotes className={className} style={style} value={value} />;
		case "yearly-commits":
			return <UserTrophyYearlyCommits className={className} style={style} value={value} />;
		case "yearly-posts":
			return <UserTrophyYearlyPosts className={className} style={style} value={value} />;
		default:
			return null;
	}
};
