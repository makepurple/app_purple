import React, { CSSProperties, FC } from "react";
import { SiteWideSideDrawerFollowableFragment } from "../../graphql";
import { SiteWideSideDrawerSkillFollowLink } from "./SiteWideSideDrawerSkillFollowLink";
import { SiteWideSideDrawerUserFollowLink } from "./SiteWideSideDrawerUserFollowLink";

export interface SiteWideSideDrawerFollowLinkProps {
	className?: string;
	followable: SiteWideSideDrawerFollowableFragment;
	style?: CSSProperties;
}

export const SiteWideSideDrawerFollowLink: FC<SiteWideSideDrawerFollowLinkProps> = ({
	className,
	followable,
	style
}) => {
	switch (followable.__typename) {
		case "Skill":
			return (
				<SiteWideSideDrawerSkillFollowLink
					className={className}
					skill={followable}
					style={style}
				/>
			);
		case "User":
			return (
				<SiteWideSideDrawerUserFollowLink
					className={className}
					style={style}
					user={followable}
				/>
			);
		default:
			return null;
	}
};
