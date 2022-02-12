import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import { SkillPageLayout } from "../../../organisms";

const Contents = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

export const Page: NextPage = () => {
	const router = useRouter();

	const skillName = router?.query.skillName as string;
	const skillOwner = router?.query.skillOwner as string;

	return (
		<SkillPageLayout selectedTab="posts" skillName={skillName} skillOwner={skillOwner}>
			<Contents>
				<div />
			</Contents>
		</SkillPageLayout>
	);
};

export default Page;
