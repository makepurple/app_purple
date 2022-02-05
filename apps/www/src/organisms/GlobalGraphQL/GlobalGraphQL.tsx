import { memo } from "react";
import { useGlobalGraphQL } from "../../hooks";

export type GlobalGraphQLProps = Record<string, never>;

export const GlobalGraphQL = memo<GlobalGraphQLProps>(() => {
	useGlobalGraphQL();

	return null;
});

GlobalGraphQL.displayName = "GlobalGraphQL";
