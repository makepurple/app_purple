import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { SkillOwnerPageLayout } from "../../../organisms";

const MAX_SKILLS = 6;
const BATCH_SIZE = 20;

export const Page: NextPage = () => {
	const router = useRouter();

	const skillOwner = router?.query.skillOwner as string;

	return (
		<SkillOwnerPageLayout skillOwner={skillOwner}>
			Skill owner page works~!
		</SkillOwnerPageLayout>
	);
};

export default Page;
