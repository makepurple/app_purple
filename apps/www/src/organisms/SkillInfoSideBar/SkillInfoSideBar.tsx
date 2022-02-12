import { Avatar, Paper } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { SkillInfoSideBarSkillFragment } from "../../graphql";

const Root = tw(Paper)`
	flex
	flex-col
	items-center
`;

const StyledAvatar = tw(Avatar)`
	rounded-md
`;

export interface SkillInfoSideBarProps {
	className?: string;
	skill: SkillInfoSideBarSkillFragment;
	style?: CSSProperties;
}

export const SkillInfoSideBar: FC<SkillInfoSideBarProps> = ({ className, skill, style }) => {
	return (
		<Root className={className} style={style}>
			<div />
		</Root>
	);
};
