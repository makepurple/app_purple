import { Divider, Paper } from "@/client/atoms";
import { useGetExperiencesQuery } from "@/client/graphql";
import { useRelayCursor } from "@/client/hooks";
import { NonIdealState } from "@/client/molecules";
import { ExperienceCard, LoadingExperienceCard, UserPageLayout } from "@/client/organisms";
import { PageProps, pageProps } from "@/client/page-props/[userName]/experiences";
import { HexagonIcon } from "@/client/svgs";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import tw from "twin.macro";

const BATCH_SIZE = 20;

const Content = tw(Paper)`
	flex
	flex-col
	items-stretch
	p-6
`;

const Title = tw.h2`
	mb-6
	text-xl
	font-bold
`;

const Experiences = tw.div`
	flex
	flex-col
	items-stretch
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

	const experiences = data?.experiences.nodes ?? [];

	return (
		<UserPageLayout selectedTab="experiences" userName={userName}>
			<Content>
				<Title>Experiences</Title>
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
								<ExperienceCard ref={getLoadMoreRef(i)} experience={experience} />
							</Fragment>
						))
					)}
				</Experiences>
			</Content>
		</UserPageLayout>
	);
};

export default Page;
