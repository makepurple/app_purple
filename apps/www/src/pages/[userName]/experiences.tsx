import { Button, HexagonIcon, NonIdealState, Paper } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { CreateExperienceFragmentFragment, GetExperiencesDocument } from "../../graphql";
import { ExperienceCard, LoadingExperienceCard, UserPageLayout } from "../../organisms";
import { PageProps, pageProps } from "../../page-props/[userName]/experiences";
import { PlusIcon } from "../../svgs";

const CreateExperienceForm = dynamic(() => import("../../organisms/CreateExperienceForm"), {
	ssr: false
});
const UpdateExperienceForm = dynamic(() => import("../../organisms/UpdateExperienceForm"), {
	ssr: false
});

const BATCH_SIZE = 20;

const Content = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

const ActionContainer = tw.div`
	flex
	justify-end
`;

const AddButton = tw(Button)`
	flex-shrink-0
	flex
	items-center
	gap-1
`;

const FormContainer = tw(Paper)`
	p-4
`;

const Experiences = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

const AddRemoveIcon = styled(PlusIcon)<{ $canClose: boolean }>`
	${tw`
		transition
		duration-150
		ease-in
	`}

	${({ $canClose }) => $canClose && tw`rotate-45`}
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();
	const { data: session } = useSession();

	const userName = router?.query.userName as string;

	const isMyPage = session?.user.name === userName;

	const [{ data, fetching }, { getRef }] = useRelayCursor({
		query: GetExperiencesDocument,
		field: "experiences",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			where: {
				user: {
					name: {
						equals: userName
					}
				}
			}
		}
	});

	const [isCreate, setIsCreate] = useState<boolean>(false);
	const [editExperience, setEditExperience] =
		useState<Maybe<CreateExperienceFragmentFragment>>(null);

	const experiences = data?.experiences.nodes ?? [];

	return (
		<UserPageLayout selectedTab="experiences" userName={userName}>
			<Content>
				<ActionContainer>
					{isMyPage && (
						<AddButton
							onClick={() => {
								if (isCreate || editExperience) {
									setIsCreate(false);
									setEditExperience(null);

									return;
								}

								setIsCreate(true);
							}}
							type="button"
							variant={isCreate || !!editExperience ? "secondary" : "primary"}
							tw="flex-shrink-0"
						>
							<span>{isCreate || !!editExperience ? "Close" : "Add Experience"}</span>
							<AddRemoveIcon
								height={24}
								width={24}
								$canClose={isCreate || !!editExperience}
							/>
						</AddButton>
					)}
				</ActionContainer>
				{isCreate ? (
					<FormContainer>
						<CreateExperienceForm
							onClose={() => {
								setIsCreate(false);
							}}
						/>
					</FormContainer>
				) : editExperience ? (
					<FormContainer>
						<UpdateExperienceForm
							experience={editExperience}
							onClose={() => {
								setEditExperience(null);
							}}
						/>
					</FormContainer>
				) : (
					<Experiences>
						{!experiences.length
							? !fetching && (
									<NonIdealState
										title="There's nothing here"
										subTitle="We couldn't find any experiences"
										tw="shadow-none"
									>
										<HexagonIcon height={96} width={96} />
									</NonIdealState>
							  )
							: experiences.map((experience, i) => (
									<ExperienceCard
										key={experience.id}
										ref={getRef(i)}
										experience={experience}
										onEdit={() => setEditExperience(experience)}
									/>
							  ))}
						{fetching &&
							Array.from({ length: 3 }, (_, i) => <LoadingExperienceCard key={i} />)}
					</Experiences>
				)}
			</Content>
		</UserPageLayout>
	);
};

export default Page;
