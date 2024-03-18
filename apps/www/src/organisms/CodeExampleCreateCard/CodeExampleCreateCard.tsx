import { Avatar, Logo, Paper } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Root = tw(Paper)`
	flex
	flex-col
	items-center
	justify-center
	cursor-pointer
	gap-3
	p-3
	hover:bg-violet-50
`;

const Text = tw.span`
	text-black
	text-xl
	font-bold
	leading-none
	text-center
`;

const StyledAvatar = tw(Avatar)`
	rounded-md
`;

const IconContainer = tw.div`
	flex
	w-14
	h-14
	items-center
	justify-center
	rounded-md
	bg-white
	z-index[1]
`;

const StyledLogo = tw(Logo)`
	h-12
	w-12
`;

export interface CodeExampleCreateCardProps {
	className?: string;
	style?: CSSProperties;
	userName: string;
}

export const CodeExampleCreateCard: FC<CodeExampleCreateCardProps> = ({
	className,
	style,
	userName
}) => {
	return (
		<NextLink
			legacyBehavior
			href="/[userName]/snippets/new"
			as={`/${userName}/snippets/new`}
			passHref
		>
			<Root as="a" className={className} style={style}>
				<Text>Create a new snippet</Text>
				<StyledAvatar border={4}>
					<IconContainer>
						<StyledLogo href={null} />
					</IconContainer>
				</StyledAvatar>
			</Root>
		</NextLink>
	);
};
