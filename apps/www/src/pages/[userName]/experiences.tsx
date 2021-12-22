import { Button, Divider, HexagonIcon, NonIdealState, Paper } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import tw, { styled } from "twin.macro";
import { useGetExperiencesQuery } from "../../graphql";
import {
	CreateExperienceForm,
	ExperienceCard,
	LoadingExperienceCard,
	UserPageLayout
} from "../../organisms";
import { PageProps, pageProps } from "../../page-props/[userName]/experiences";
import { PlusIcon } from "../../svgs";

const BATCH_SIZE = 20;

const Content = tw(Paper)`
	flex
	flex-col
	items-stretch
	p-6
`;

const Title = tw.h2`
	flex
	mb-6
	text-xl
	font-bold
`;

const AddButton = tw(Button)`
	h-12
	w-12
	p-0
`;

const Experiences = tw.div`
	flex
	flex-col
	items-stretch
`;

const AddRemoveIcon = styled(PlusIcon)<{ $isCreate: boolean }>`
	${tw`
		transition
		duration-150
		ease-in
	`}

	${({ $isCreate }) => $isCreate && tw`rotate-45`}
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetExperiencesQuery, {
		field: "experiences",
		requestPolicy: "cache-first",
		variables: {
			first: BATCH_SIZE,
			where: {
				user: {
					name: {
						equals: userName
					}
				}
			},
			after: null
		}
	});

	const [isCreate, setIsCreate] = useState<boolean>(false);

	const experiences = data?.experiences.nodes ?? [];

	return (
		<UserPageLayout selectedTab="experiences" userName={userName}>
			<Content>
				<Title>
					<span tw="flex-grow">{isCreate ? "Add Experience" : "Experiences"}</span>
					<AddButton
						onClick={() => {
							setIsCreate((oldIsCreate) => !oldIsCreate);
						}}
						size="small"
						type="button"
						variant="secondary"
						tw="flex-shrink-0"
					>
						<AddRemoveIcon height={24} width={24} $isCreate={isCreate} />
					</AddButton>
				</Title>
				{isCreate ? (
					<CreateExperienceForm
						onClose={() => {
							setIsCreate(false);
						}}
					/>
				) : (
					<Experiences>
						{fetching ? (
							Array.from({ length: 3 }, (_, i) => (
								<Fragment key={i}>
									{!!i && <Divider tw="ml-22" />}
									<LoadingExperienceCard />
								</Fragment>
							))
						) : !experiences.length ? (
							<NonIdealState
								title="There's nothing here"
								subTitle="We couldn't find any experiences"
								tw="shadow-none"
							>
								<HexagonIcon height={96} width={96} />
							</NonIdealState>
						) : (
							experiences.map((experience, i) => (
								<Fragment key={experience.id}>
									{!!i && <Divider tw="ml-22" />}
									<ExperienceCard
										ref={getLoadMoreRef(i)}
										experience={experience}
									/>
								</Fragment>
							))
						)}
					</Experiences>
				)}
			</Content>
		</UserPageLayout>
	);
};

export default Page;
