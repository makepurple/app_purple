import { ObjectUtils } from "@makepurple/utils";
import { RefCallback, useCallback, useEffect, useMemo, useState } from "react";
import type { FieldPath } from "react-hook-form";
import type { UseQueryArgs, UseQueryResponse, UseQueryState } from "urql";
import { useClient, useQuery } from "urql";
import { useRelativeScrollPosition } from "./useRelativeScrollPosition";

export type PageInfo = {
	endCursor?: Maybe<string>;
	hasNextPage: boolean;
};

export type UseQueryHook<TData, TVariables> = (
	options?: Omit<UseQueryArgs<TVariables>, "query">
	// eslint-disable-next-line @typescript-eslint/ban-types
) => UseQueryResponse<TData, object>;

export type UseRelayCursorGetRef = (i: number) => Maybe<RefCallback<HTMLElement>>;
export type UseRelayCursorActions = {
	getRef: UseRelayCursorGetRef;
};

export type UseRelayCursorArgs<
	TData = any,
	TVariables = Record<string, unknown>,
	TFieldName extends FieldPath<TData> = any
> = UseQueryArgs<TVariables, TData> & {
	direction?: "x" | "y";
	field: TFieldName;
	offset?: number;
};

export const useRelayCursor = <
	TData,
	TVariables extends { after?: Maybe<string> },
	TFieldName extends FieldPath<TData> = FieldPath<TData>
>(
	args: UseRelayCursorArgs<TData, TVariables, TFieldName>
): [state: UseQueryState<TData, any>, actions: UseRelayCursorActions] => {
	const { direction = "y", field: fieldName, offset = 0, ...options } = args;

	const [result] = useQuery({ ...options });

	const { data, fetching: fetchingInitial } = result;

	const field = ObjectUtils.get(data as TData, fieldName) as
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

	const [fetchingMore, setFetchingMore] = useState<boolean>(false);
	const urqlClient = useClient();

	const fetching = fetchingInitial || fetchingMore;

	useEffect(() => {
		if (!shouldLoadMore || fetching) return;
		if (!pageInfo?.hasNextPage || !pageInfo?.endCursor) return;

		setFetchingMore(true);

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		urqlClient
			.query(options.query, { ...options.variables, after: pageInfo.endCursor } as TVariables)
			.toPromise()
			.then(() => {
				setFetchingMore(false);
			});
	}, [
		fetching,
		options.query,
		options.variables,
		pageInfo?.endCursor,
		pageInfo?.hasNextPage,
		shouldLoadMore,
		urqlClient
	]);

	const getRef = useCallback(
		(i: number): Maybe<RefCallback<HTMLElement>> => {
			if (nodes.length < offset) return i === 0 ? loadMoreRef : null;

			const isOffset = nodes.length - i === offset + 1;

			return isOffset ? loadMoreRef : null;
		},
		[nodes.length, offset]
	);

	const state = useMemo(() => ({ ...result, fetching }), [fetching, result]);
	const actions = useMemo(() => ({ getRef }), [getRef]);

	return [state, actions] as [UseQueryState<TData, any>, UseRelayCursorActions];
};
