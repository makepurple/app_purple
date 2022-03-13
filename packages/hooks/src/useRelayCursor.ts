import { ObjectUtils } from "@makepurple/utils";
import { RefCallback, useCallback, useEffect, useMemo, useState } from "react";
import type { FieldPath } from "react-hook-form";
import type { UseQueryArgs, UseQueryResponse, UseQueryState } from "urql";
import { useQuery } from "urql";
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
export type UseRelayCursorReset = () => void;
export type UseRelayCursorActions = {
	getRef: UseRelayCursorGetRef;
	reset: UseRelayCursorReset;
};

export type UseRelayCursorArgs<
	TData = any,
	TVariables = object,
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
	const { direction = "y", field: fieldName, offset = 0, ...queryOptions } = args;

	const [cursor, setCursor] = useState<Maybe<string>>(null);

	const variables = { ...args.variables, after: cursor } as TVariables;

	const [result] = useQuery({ ...queryOptions, variables });

	const { data, fetching } = result;

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

	const reset = useCallback(() => {
		setCursor(null);
	}, []);

	const actions = useMemo(() => ({ getRef, reset }), [getRef, reset]);

	return [result, actions] as [UseQueryState<TData, any>, UseRelayCursorActions];
};
