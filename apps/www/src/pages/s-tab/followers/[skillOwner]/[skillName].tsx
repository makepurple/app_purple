import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { SkillPageLayout } from "../../../../organisms";

export const Page: NextPage = () => {
	const router = useRouter();

	const skillName = router?.query.skillName as string;
	const skillOwner = router?.query.skillOwner as string;

	return (
		<SkillPageLayout selectedTab="followers" skillName={skillName} skillOwner={skillOwner}>
			<div />
		</SkillPageLayout>
	);
};
