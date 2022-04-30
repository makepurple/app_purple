import {
	AlertDialog,
	Anchor,
	Avatar,
	Button,
	GitHubAvatarImage,
	Paper,
	Tags,
	toast
} from "@makepurple/components";
import { FormatUtils } from "@makepurple/utils";
import { oneLine } from "common-tags";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef, useMemo } from "react";
import tw, { styled } from "twin.macro";
import {
	CodeExampleCardCodeExampleFragment,
	CodeExampleWhereUniqueInput,
	useDeleteCodeExampleMutation,
	UserRole,
	useUnvoteCodeExampleMutation,
	useUpvoteCodeExampleMutation
} from "../../graphql";
import { BookIcon, ThumbsUpIcon } from "../../svgs";
import { PermissionUtils } from "../../utils";

const DeleteButton = tw(Button)`
	opacity-0
`;

const Root = styled(Paper)`
	${tw`
		flex
		flex-row
		items-start
		gap-4
		p-4
		cursor-pointer
		hover:bg-indigo-50
	`}

	&:hover ${DeleteButton} {
		${tw`
			opacity-100
		`}
	}
`;

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	rounded-md
`;

const AvatarIconContainer = tw.div`
	flex
	items-center
	justify-center
	h-16
	w-16
	bg-white
	z-index[1]
`;

const Content = tw.div`
	flex-grow
	self-stretch
	flex
	flex-col
	items-start
	gap-2
`;

const Title = tw(Anchor)`
	text-black
	text-xl
	font-bold
	leading-none
	truncate
`;

const DescriptionContainer = tw.a`
	flex-grow
`;

const Description = tw.p`
	text-base
	text-gray-500
	line-clamp-2
`;

const Language = tw.span`
	flex
	flex-row
	items-center
	text-sm
	leading-none
	text-gray-500
`;

const LanguageColor = tw.span`
	h-3
	w-3
	rounded-full
`;

const Actions = tw.div`
	self-stretch
	flex
	flex-row
	items-stretch
	justify-between
	h-8
`;

const UpvoteButton = styled(Button)<{ $upvoted: boolean }>`
	${tw`
		flex
		items-center
		font-normal
	`}

	${({ $upvoted }) => $upvoted && tw`text-green-700`}
`;

const UpvoteCount = tw.span`
	text-sm
	leading-6
	sm:leading-5
`;

export interface CodeExampleCardProps {
	className?: string;
	codeExample: CodeExampleCardCodeExampleFragment;
	style?: CSSProperties;
}

export const CodeExampleCard = forwardRef<HTMLDivElement, CodeExampleCardProps>((props, ref) => {
	const { className, codeExample, style } = props;

	const router = useRouter();
	const { data: session, status } = useSession();

	const isMyUser = session?.user.name === codeExample.authorName;

	const canDelete = useMemo(() => {
		if (isMyUser) return true;
		if (!session?.user) return false;

		return PermissionUtils.isGreaterRole(
			session.user.role as UserRole,
			codeExample.author.role
		);
	}, [codeExample, isMyUser, session?.user]);

	const [{ fetching: removing }, remove] = useDeleteCodeExampleMutation();
	const [{ fetching: unvoting }, unvote] = useUnvoteCodeExampleMutation();
	const [{ fetching: upvoting }, upvote] = useUpvoteCodeExampleMutation();

	const primarySkill = codeExample.primarySkill;
	const skills = codeExample.skills.nodes;

	const fetching = removing || unvoting || upvoting;

	return (
		<Root
			ref={ref}
			className={className}
			onClick={async () => {
				await router.push(
					"/[userName]/snippets/[codeExampleTitle]",
					`/${codeExample.authorName}/snippets/${codeExample.urlSlug}`
				);
			}}
			style={style}
		>
			<NextLink
				href="/s/[skillOwner]/[skillName]"
				as={`/s/${primarySkill.owner}/${primarySkill.name}`}
				passHref
			>
				<StyledAvatar
					border={4}
					onClick={(e) => {
						e.stopPropagation();
					}}
					title={`${primarySkill.owner}/${primarySkill.name}`}
				>
					{primarySkill.github.owner.__typename === "GitHubOrganization" ? (
						<GitHubAvatarImage
							alt={primarySkill.name}
							src={primarySkill.github.owner.avatarUrl}
							height={64}
							width={64}
						/>
					) : (
						<AvatarIconContainer>
							<BookIcon height={24} width={24} />
						</AvatarIconContainer>
					)}
				</StyledAvatar>
			</NextLink>
			<Content>
				<NextLink
					href="/[userName]/snippets/[codeExampleTitle]"
					as={`/${codeExample.authorName}/snippets/${codeExample.urlSlug}`}
					passHref
				>
					<Title>{codeExample.title}</Title>
				</NextLink>
				<NextLink
					href="/[userName]/snippets/[codeExampleTitle]"
					as={`/${codeExample.authorName}/snippets/${codeExample.urlSlug}`}
					passHref
				>
					<DescriptionContainer>
						{!!codeExample.description && (
							<Description>{codeExample.description}</Description>
						)}
					</DescriptionContainer>
				</NextLink>
				<Tags type="positive">
					<Language>
						<LanguageColor
							style={{ backgroundColor: codeExample.languageColor }}
							tw="mr-1"
						/>
						<span>{codeExample.language}</span>
					</Language>
					{skills.map((skill) => (
						<NextLink
							key={`${skill.owner}/${skill.name}`}
							href="/s/[skillOwner]/[skillName]"
							as={`/s/${skill.owner}/${skill.name}`}
							passHref
						>
							<Tags.Tag
								id={`${skill.owner}/${skill.name}`}
								onClick={(e) => {
									e.stopPropagation();
								}}
							>
								{skill.name}
							</Tags.Tag>
						</NextLink>
					))}
				</Tags>
				<Actions>
					<UpvoteButton
						disabled={fetching}
						onClick={async (e) => {
							e.stopPropagation();

							if (status !== "authenticated") {
								await router.push("/signup");

								return;
							}

							const where: CodeExampleWhereUniqueInput = {
								id: codeExample.id
							};

							if (codeExample.viewerUpvote) {
								await unvote({ where }).catch(() => false);

								return;
							}

							const didSucceed = await upvote({ where })
								.then((result) => !!result.data?.upvoteCodeExample.record)
								.catch(() => false);

							if (!didSucceed) {
								toast.error("Could not like this snippet");

								return;
							}

							toast.success("You liked this snippet! 🎉");
						}}
						size="small"
						variant="secondary"
						$upvoted={!!codeExample.viewerUpvote}
					>
						<ThumbsUpIcon height={16} width={16} tw="mr-1" />
						<UpvoteCount>{FormatUtils.toGitHubFixed(codeExample.upvotes)}</UpvoteCount>
					</UpvoteButton>
					{canDelete && (
						<AlertDialog
							description={oneLine`
								This action cannot be undone. This will permanently delete this
								snippet.
							`}
							onConfirm={async (e) => {
								e.stopPropagation();

								const where: CodeExampleWhereUniqueInput = {
									id: codeExample.id
								};

								const didSucceed = await remove({ where })
									.then((result) => !!result.data?.deleteCodeExample)
									.catch(() => false);

								if (!didSucceed) {
									toast.error("Could not delete this snippet");

									return;
								}

								toast.success("Snippet was successfully deleted");
							}}
							text="Yes, delete snippet"
						>
							<DeleteButton
								disabled={fetching}
								onClick={(e) => {
									e.stopPropagation();
								}}
								size="small"
								type="button"
								variant="alert"
							>
								Delete
							</DeleteButton>
						</AlertDialog>
					)}
				</Actions>
			</Content>
		</Root>
	);
});

CodeExampleCard.displayName = "CodeExampleCard";
