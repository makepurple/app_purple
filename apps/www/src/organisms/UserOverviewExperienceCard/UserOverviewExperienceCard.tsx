import { Avatar } from "@makepurple/components";
import { useOnKeyDown } from "@makepurple/hooks";
import NextImage from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { UserOverviewExperienceCardExperienceFragment } from "../../graphql";

const Root = tw.div`
	flex
	flex-row
	items-center
	px-6
	py-2
	cursor-pointer
	hover:bg-indigo-50
`;

const StyledAvatar = tw(Avatar)`
	rounded-md
`;

const Name = tw.a`
	leading-none
	font-semibold
	text-black
	focus:ring-0
	focus-visible:ring-0
`;

export interface UserOverviewExperienceCardProps {
	className?: string;
	experience: UserOverviewExperienceCardExperienceFragment;
	style?: CSSProperties;
}

export const UserOverviewExperienceCard: FC<UserOverviewExperienceCardProps> = ({
	className,
	experience,
	style
}) => {
	const router = useRouter();

	const organization = experience.organization.github;

	const onEnter = useOnKeyDown({ key: "ENTER", global: false }, async () => {
		await router.push("/s/[skillOwner]", `/s/${organization.name}`);
	});

	return (
		<Root
			className={className}
			onClick={async () => {
				await router.push("/s/[skillOwner]", `/s/${organization.name}`);
			}}
			onKeyDown={onEnter}
			role="link"
			style={style}
			tabIndex={0}
			data-href={`/s/${organization.name}`}
		>
			<NextLink href="/s/[skillOwner]" as={`/s/${organization.name}`} passHref>
				<StyledAvatar
					border={3}
					onClick={(e) => {
						e.stopPropagation();
					}}
					tw="mr-3"
				>
					<NextImage src={organization.avatarUrl} height={36} width={36} />
				</StyledAvatar>
			</NextLink>
			<NextLink href="/s/[skillOwner]" as={`/s/${organization.name}`} passHref>
				<Name
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					{organization.name}
				</Name>
			</NextLink>
		</Root>
	);
};
