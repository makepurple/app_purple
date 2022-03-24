import React, { CSSProperties, FC, MouseEvent } from "react";
import { SiteWideSideDrawerFollowableFragment } from "../../graphql";
import { SiteWideSideDrawerSkillFollowLink } from "./SiteWideSideDrawerSkillFollowLink";
import { SiteWideSideDrawerUserFollowLink } from "./SiteWideSideDrawerUserFollowLink";

export interface SiteWideSideDrawerFollowLinkProps {
	className?: string;
	followable: SiteWideSideDrawerFollowableFragment;
	onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
	style?: CSSProperties;
}

export const SiteWideSideDrawerFollowLink: FC<SiteWideSideDrawerFollowLinkProps> = ({
	className,
	followable,
	onClick,
	style
}) => {
	switch (followable.__typename) {
		case "Skill":
			return (
				<SiteWideSideDrawerSkillFollowLink
					className={className}
					onClick={onClick}
					skill={followable}
					style={style}
				/>
			);
		case "User":
			return (
				<SiteWideSideDrawerUserFollowLink
					className={className}
					onClick={onClick}
					style={style}
					user={followable}
				/>
			);
		default:
			return null;
	}
};
