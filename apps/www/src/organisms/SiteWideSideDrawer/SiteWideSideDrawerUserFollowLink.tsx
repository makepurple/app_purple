import { ListItem } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, FC, MouseEvent } from "react";
import tw from "twin.macro";
import { SiteWideSideDrawerUserFollowLinkUserFragment } from "../../graphql";
import { UserAvatar } from "../UserAvatar";

const Root = tw.a`
	py-2
	cursor-pointer
`;

const Name = tw.span`
	text-base
	truncate
`;

export interface SiteWideSideDrawerUserFollowLinkProps {
	className?: string;
	onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
	style?: CSSProperties;
	user: SiteWideSideDrawerUserFollowLinkUserFragment;
}

export const SiteWideSideDrawerUserFollowLink: FC<SiteWideSideDrawerUserFollowLinkProps> = ({
	className,
	onClick,
	style,
	user
}) => {
	return (
		<NextLink legacyBehavior href="/[userName]" as={`/${user.name}`} passHref>
			<ListItem
				as={Root}
				className={className}
				onClick={(e) => {
					onClick?.(e);
				}}
				style={style}
				title={user.name}
			>
				<UserAvatar
					asLink={false}
					border={2}
					user={user}
					height={24}
					width={24}
					tw="mr-3"
				/>
				<Name>{user.name}</Name>
			</ListItem>
		</NextLink>
	);
};
