import {
	AlertDialog,
	Avatar,
	Button,
	CodeBlock,
	Divider,
	GitHubAvatarImage,
	NonIdealState,
	Paper,
	Tags
} from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { dayjs, FormatUtils } from "@makepurple/utils";
import { oneLine } from "common-tags";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Language } from "prism-react-renderer";
import React, { useMemo } from "react";
import toast from "react-hot-toast";
import tw from "twin.macro";
import {
	CodeExampleWhereUniqueInput,
	CodeLanguage,
	useDeleteCodeExampleMutation,
	useGetCodeExampleCommentsQuery,
	useGetCodeExampleQuery,
	useUnvoteCodeExampleMutation,
	useUpvoteCodeExampleMutation
} from "../../../../graphql";
import {
	CommentCard,
	CreateCommentForm,
	LoadingCommentCard,
	UserPageLayout
} from "../../../../organisms";
import {
	pageProps,
	PageProps
} from "../../../../page-props/[userName]/snippets/[codeExampleTitle]";
import { BookIcon, CommentIcon, ThumbsUpIcon } from "../../../../svgs";

const BATCH_SIZE = 8;

const Content = tw(Paper)`
	flex
	flex-col
	items-stretch
`;

const CodeExampleContent = tw.div`
	flex
	flex-col
	items-stretch
	p-4
	gap-4
	sm:p-6
	sm:gap-6
`;

const TopContainer = tw.div`
	flex
	flex-col
	items-center
	justify-center
	gap-2
`;

const TitleContainer = tw.div`
	flex
	flex-row
	items-center
	justify-center
	gap-3
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
	h-full
	w-full
	bg-white
	z-index[1]
`;

const Title = tw.h1`
	flex
	justify-center
	text-4xl
	text-center
	font-bold
	truncate
`;

const Skills = tw(Tags)`
	max-width[24rem]
`;

const Description = tw.p`
	text-base
	text-gray-500
`;

const ByLine = tw.div`
	flex
	items-center
	gap-3
`;

const PublishedAt = tw.div`
	text-gray-500
`;

const Actions = tw.div`
	sticky
	bottom-0
	flex
	items-center
	justify-between
	p-4
	border-t
	border-solid
	border-gray-300
	rounded-b-lg
	bg-white
	sm:px-6
`;

const UpvoteButton = tw(Button)`
	h-9
	gap-1.5
`;

const UpvoteCount = tw.span`
	text-base
	sm:leading-5
`;

const OwnerActions = tw.div`
	flex
	flex-row
	items-stretch
	h-full
	gap-3
`;

const EditButton = tw(Button)`
	h-9
	w-20
	text-base
`;

const DeleteButton = tw(Button)`
	h-9
	w-20
	text-base
`;

const CommentsSection = tw(Paper)`
	flex
	flex-col
	items-stretch
	py-4
	sm:py-6
`;

const CommentFormContainer = tw.div`
	px-4
	sm:px-6
`;

const CommentsContainer = tw.div`
	px-4
	sm:px-6
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();
	const { data: sessionData } = useSession();

	const [{ fetching: removing }, remove] = useDeleteCodeExampleMutation();
	const [{ fetching: upvoting }, upvote] = useUpvoteCodeExampleMutation();
	const [{ fetching: unvoting }, unvote] = useUnvoteCodeExampleMutation();

	const viewer = sessionData?.user;

	const userName = router?.query.userName as string;
	const urlSlug = router?.query.codeExampleTitle as string;

	const isMyPage = viewer?.name === userName;

	const [{ data: postData }] = useGetCodeExampleQuery({
		requestPolicy: "cache-first",
		variables: {
			authorName: userName,
			urlSlug
		}
	});

	/**
	 * !HACK
	 * @description Type is too deep/complex, so TS is throwing an error, even when it is correct.
	 * Ignoring this error, so that we can keep the types without it erroring.
	 * @author David Lee
	 * @date February 27, 2022
	 */
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const [{ data: commentsData, fetching: fetchingComments }, getRef] = useRelayCursor(
		useGetCodeExampleCommentsQuery,
		{
			direction: "y",
			field: "comments",
			offset: 0,
			requestPolicy: "cache-first",
			variables: {
				after: null,
				first: BATCH_SIZE,
				userName,
				codeExampleTitle: urlSlug
			}
		}
	);

	const codeExample = postData?.codeExample;
	const comments = commentsData?.comments.nodes ?? [];

	const language = useMemo((): Maybe<Language> => {
		switch (codeExample?.language) {
			case CodeLanguage.Go:
				return "go";
			case CodeLanguage.GraphQl:
				return "graphql";
			case CodeLanguage.Html:
				return "handlebars";
			case CodeLanguage.JavaScript:
				return "jsx";
			case CodeLanguage.Python:
				return "python";
			case CodeLanguage.Scss:
				return "scss";
			case CodeLanguage.Sql:
				return "sql";
			case CodeLanguage.TypeScript:
				return "tsx";
			case CodeLanguage.Yaml:
				return "yaml";
			default:
				return null;
		}
	}, [codeExample?.language]);

	/**
	 * TODO
	 * @description Return 404 error page eventually
	 * @author David Lee
	 * @date February 27, 2022
	 */
	if (!codeExample) return null;

	const primarySkill = codeExample.primarySkill;
	const skills = codeExample.skills.nodes ?? [];

	const mutating = removing || upvoting || unvoting;

	return (
		<UserPageLayout selectedTab="snippets" userName={userName}>
			<Content>
				<CodeExampleContent>
					<TopContainer>
						<TitleContainer>
							<NextLink
								href="/s/[skillOwner]/[skillName]"
								as={`/s/${primarySkill.owner}/${primarySkill.name}`}
								passHref
							>
								<StyledAvatar
									border={2}
									aria-label={`${primarySkill.owner}/${primarySkill.name}`}
								>
									{primarySkill.github.owner.__typename ===
									"GitHubOrganization" ? (
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
							<Title>{codeExample.title}</Title>
						</TitleContainer>
						<Skills type="positive">
							{skills.map((skill) => (
								<Tags.Tag key={skill.id} id={skill.id}>
									{skill.name}
								</Tags.Tag>
							))}
						</Skills>
					</TopContainer>
					{!!codeExample.description && (
						<Description>{codeExample.description}</Description>
					)}
					<ByLine>
						{codeExample.author.image && (
							<Avatar border={2}>
								<GitHubAvatarImage
									alt={codeExample.author.name}
									src={codeExample.author.image}
									height={48}
									width={48}
								/>
							</Avatar>
						)}
						<div>
							<div>{codeExample.author.name}</div>
							<PublishedAt>
								{dayjs(codeExample.updatedAt).format("MMM DD, YYYY")}
							</PublishedAt>
						</div>
					</ByLine>
					<CodeBlock
						code={codeExample.content}
						language={language}
						title={codeExample.language}
					/>
				</CodeExampleContent>
				<Actions>
					<UpvoteButton
						disabled={mutating}
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
								toast.error("Could not like this snippet");

								return;
							}

							toast.success("You liked this snippet! 🎉");
						}}
						size="small"
						type="button"
						variant="secondary"
					>
						<ThumbsUpIcon height={20} width={20} />
						<UpvoteCount>{FormatUtils.toGitHubFixed(codeExample.upvotes)}</UpvoteCount>
					</UpvoteButton>
					{isMyPage && (
						<OwnerActions>
							<NextLink
								href="/[userName]/snippets/[codeExampleTitle]/edit"
								as={`/${userName}/snippets/${urlSlug}/edit`}
								passHref
							>
								<EditButton as="a" size="small">
									Edit
								</EditButton>
							</NextLink>
							<AlertDialog
								description={oneLine`
									Are you sure you wish to delete this snippet? This cannot be undone.
								`}
								onConfirm={async () => {
									const where: CodeExampleWhereUniqueInput = {
										id: codeExample.id
									};

									const didSucceed = await remove({ where })
										.then((result) => !!result.data?.deleteCodeExample.record)
										.catch(() => false);

									if (!didSucceed) {
										toast.error("Could not delete this snippet");

										return;
									}

									toast.success("Snippet was successfully deleted");

									await router.push(
										"/[userName]/snippets",
										`/${userName}/snippets`
									);
								}}
								text="Yes, delete snippet"
							>
								<DeleteButton
									disabled={mutating}
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
						</OwnerActions>
					)}
				</Actions>
			</Content>
			<CommentsSection tw="mt-6">
				{!!viewer && (
					<>
						<CommentFormContainer>
							<CreateCommentForm codeExampleId={codeExample.id} />
						</CommentFormContainer>
						<Divider tw="my-4 sm:my-6" />
					</>
				)}
				<CommentsContainer>
					{!comments.length
						? !fetchingComments && (
								<NonIdealState
									title="There's nothing here"
									subTitle="We couldn't find any comments"
									tw="shadow-none"
								>
									<CommentIcon height={96} width={96} />
								</NonIdealState>
						  )
						: comments.map((comment, i) => (
								<CommentCard
									key={comment.id}
									ref={getRef(i)}
									comment={comment}
									replies={comment.replies}
								/>
						  ))}
					{fetchingComments &&
						Array.from({ length: 3 }, (_, i) => <LoadingCommentCard key={i} />)}
				</CommentsContainer>
			</CommentsSection>
		</UserPageLayout>
	);
};

export default Page;
