import { RefCallback, useCallback, useEffect, useState } from "react";
import type { UseQueryArgs, UseQueryResponse } from "urql";
import { useRelativeScrollPosition } from "./useRelativeScrollPosition";

export type PageInfo = {
	endCursor?: Maybe<string>;
	hasNextPage: boolean;
};

export type UseQueryHook<TQuery, TVariables> = (
	options?: Omit<UseQueryArgs<TVariables>, "query">
	// eslint-disable-next-line @typescript-eslint/ban-types
) => UseQueryResponse<TQuery, object>;

export const useRelayCursor = <TQuery, TVariables, TFieldName extends keyof TQuery>(
	useQueryHook: UseQueryHook<TQuery, TVariables>,
	options: Omit<UseQueryArgs<TVariables>, "query"> & {
		direction?: "x" | "y";
		field: TFieldName;
		offset?: number;
	}
) => {
	const { direction = "y", field: fieldName, offset = 0, ...queryOptions } = options;

	const [cursor, setCursor] = useState<Maybe<string>>(null);

	const [result] = useQueryHook({
		...queryOptions,
		variables: { ...(options.variables as TVariables), after: cursor }
	});

	const { data, fetching } = result;

	const field = data?.[fieldName] as { nodes: unknown[]; pageInfo: PageInfo } | undefined;

	const [loadMoreElem, loadMoreRef] = useState<HTMLElement | null>(null);

	const { isBelow, isRight } = useRelativeScrollPosition(
		{ current: loadMoreElem },
		{ origin: direction === "y" ? { x: 0, y: 0.5 } : { x: 0.5, y: 0 } }
	);

	const shouldLoadMore: boolean = direction === "y" ? isBelow : isRight;

	const nodes = field?.nodes ?? [];
	const pageInfo = field?.pageInfo;

	useEffect(() => {
		if (!shouldLoadMore || !pageInfo?.hasNextPage || fetching) return;
		if (!pageInfo?.endCursor) return;

		setCursor(pageInfo.endCursor);
	}, [fetching, pageInfo?.endCursor, pageInfo?.hasNextPage, setCursor, shouldLoadMore]);

	const getRef = useCallback(
		(i: number): Maybe<RefCallback<HTMLElement>> => {
			if (nodes.length < offset) {
				return i === 0 ? loadMoreRef : null;
			}

			const isOffset = nodes.length - i === offset;

			return isOffset ? loadMoreRef : null;
		},
		[nodes.length, offset]
	);

	return [result, getRef] as [typeof result, typeof getRef];
};
