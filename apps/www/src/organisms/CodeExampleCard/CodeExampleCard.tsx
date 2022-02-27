import { Anchor, Avatar, Button, GitHubAvatarImage, Paper, Tags } from "@makepurple/components";
import { FormatUtils } from "@makepurple/utils";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef } from "react";
import toast from "react-hot-toast";
import tw, { styled } from "twin.macro";
import {
	CodeExampleCardCodeExampleFragment,
	CodeExampleWhereUniqueInput,
	useUnvoteCodeExampleMutation,
	useUpvoteCodeExampleMutation
} from "../../graphql";
import { BookIcon, ThumbsUpIcon } from "../../svgs";

const Root = tw(Paper)`
	flex
	flex-row
	items-start
	gap-3
	p-3
	cursor-pointer
	hover:bg-indigo-50
`;

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	h-12
	w-12
	rounded-md
`;

const AvatarIconContainer = tw.div`
	flex
	items-center
	justify-center
	h-11
	w-11
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
	font-semibold
	leading-none
`;

const DescriptionContainer = tw.a`
	flex-grow
`;

const Description = tw.p`
	text-sm
	text-gray-500
	line-clamp-2
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

export interface CodeExampleCardProps {
	className?: string;
	codeExample: CodeExampleCardCodeExampleFragment;
	style?: CSSProperties;
}

export const CodeExampleCard = forwardRef<HTMLDivElement, CodeExampleCardProps>((props, ref) => {
	const { className, codeExample, style } = props;

	const router = useRouter();

	const [{ fetching: upvoting }, upvote] = useUpvoteCodeExampleMutation();
	const [{ fetching: unvoting }, unvote] = useUnvoteCodeExampleMutation();

	const primarySkill = codeExample.primarySkill;
	const skills = codeExample.skills.nodes;

	const fetching = upvoting || unvoting;

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
					border={2}
					onClick={(e) => {
						e.stopPropagation();
					}}
					title={`${primarySkill.owner}/${primarySkill.name}`}
				>
					{primarySkill.github.owner.__typename === "GitHubOrganization" ? (
						<GitHubAvatarImage
							alt={primarySkill.name}
							src={primarySkill.github.owner.avatarUrl}
							height={48}
							width={48}
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
				<UpvoteButton
					disabled={fetching}
					onClick={async (e) => {
						e.stopPropagation();

						const where: CodeExampleWhereUniqueInput = {
							id: codeExample.id
						};

						const didSucceed = codeExample.viewerUpvote
							? await unvote({ where })
									.then((result) => !!result.data?.unvoteCodeExample.record)
									.catch(() => false)
							: await upvote({ where })
									.then((result) => !!result.data?.upvoteCodeExample.record)
									.catch(() => false);

						if (!didSucceed) {
							toast.error("Could not like this code-example");

							return;
						}

						toast.success("You liked this code-example! 🎉");
					}}
					size="small"
					variant="secondary"
					$upvoted={!!codeExample.viewerUpvote}
				>
					<ThumbsUpIcon height={16} width={16} tw="mr-1" />
					<UpvoteCount>{FormatUtils.toGitHubFixed(codeExample.upvotes)}</UpvoteCount>
				</UpvoteButton>
			</Content>
		</Root>
	);
});

CodeExampleCard.displayName = "CodeExampleCard";
