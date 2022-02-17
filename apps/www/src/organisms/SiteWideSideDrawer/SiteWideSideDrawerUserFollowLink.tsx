import { ListItem } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
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
	style?: CSSProperties;
	user: SiteWideSideDrawerUserFollowLinkUserFragment;
}

export const SiteWideSideDrawerUserFollowLink: FC<SiteWideSideDrawerUserFollowLinkProps> = ({
	className,
	style,
	user
}) => {
	return (
		<NextLink href="/[userName]" as={`/${user.name}`} passHref>
			<ListItem as={Root} className={className} style={style} title={user.name}>
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
