import { ObjectUtils } from "@makepurple/utils";
import { RefCallback, useCallback, useEffect, useState } from "react";
import type { FieldPath } from "react-hook-form";
import type { UseQueryArgs, UseQueryResponse, UseQueryState } from "urql";
import { useRelativeScrollPosition } from "./useRelativeScrollPosition";

export type PageInfo = {
	endCursor?: Maybe<string>;
	hasNextPage: boolean;
};

export type UseQueryHook<TQuery, TVariables> = (
	options?: Omit<UseQueryArgs<TVariables>, "query">
	// eslint-disable-next-line @typescript-eslint/ban-types
) => UseQueryResponse<TQuery, object>;

export const useRelayCursor = <
	TQuery,
	TVariables extends { after?: Maybe<string> },
	TFieldName extends FieldPath<TQuery> = FieldPath<TQuery>
>(
	useQueryHook: UseQueryHook<TQuery, TVariables>,
	options: Omit<UseQueryArgs<TVariables>, "query"> & {
		direction?: "x" | "y";
		field: TFieldName;
		offset?: number;
	}
): [state: UseQueryState<TQuery, any>, getRef: (i: number) => Maybe<RefCallback<HTMLElement>>] => {
	const { direction = "y", field: fieldName, offset = 0, ...queryOptions } = options;

	const [cursor, setCursor] = useState<Maybe<string>>(null);

	const variables = { ...options.variables, after: cursor } as TVariables;

	const [result] = useQueryHook({
		...queryOptions,
		variables
	});

	const { data, fetching } = result;

	const field = ObjectUtils.get(data as TQuery, fieldName) as
		| { nodes: unknown[]; pageInfo: PageInfo }
		| undefined;

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
			if (nodes.length < offset) return i === 0 ? loadMoreRef : null;

			const isOffset = nodes.length - i === offset;

			return isOffset ? loadMoreRef : null;
		},
		[nodes.length, offset]
	);

	return [result, getRef] as [UseQueryState<TQuery, any>, typeof getRef];
};
