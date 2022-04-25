import { useGetSkillInfoSideBarQuery } from "src/graphql";

const MIN_SEO_STAR_COUNT = 10_000;

export const useIndexSkill = (owner: string, name: string) => {
	const [{ data }] = useGetSkillInfoSideBarQuery({
		requestPolicy: "cache-first",
		variables: {
			name,
			owner
		}
	});

	const starCount = data?.github.repository?.stargazerCount ?? 0;

	return starCount >= MIN_SEO_STAR_COUNT;
};
