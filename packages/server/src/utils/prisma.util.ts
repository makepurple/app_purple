import type { ConnectionArguments, Edge, Options } from "@devoxa/prisma-relay-cursor-connection";
import { LangUtils } from "@makepurple/utils";

type DeepNonNullArgs<T> = T extends null
	? undefined
	: T extends { [key: string]: any }
	? { [P in keyof T]: DeepNonNullArgs<T[P]> }
	: T extends (infer U)[]
	? DeepNonNullArgs<U>[]
	: T extends readonly (infer U)[]
	? readonly DeepNonNullArgs<U>[]
	: T;

export class PrismaUtils {
	/**
	 * !HACK
	 * @description This casts all null properties on a nexus input to undefined (recursively)
	 * @author David Lee
	 * @date October 24, 2021
	 */
	public static nonNull = <T>(input: T): DeepNonNullArgs<T> => {
		if (input === null) {
			return undefined as DeepNonNullArgs<T>;
		}

		if (Array.isArray(input)) {
			return (input as readonly any[]).map((value) =>
				PrismaUtils.nonNull(value)
			) as DeepNonNullArgs<T>;
		}

		if (typeof input === "object") {
			const keys = Object.keys(input) as (keyof T)[];

			return keys.reduce((acc, key) => {
				const value = input[key];

				return { ...acc, [key]: PrismaUtils.nonNull(value) } as DeepNonNullArgs<T>;
			}, {} as DeepNonNullArgs<T>);
		}

		return input as DeepNonNullArgs<T>;
	};

	public static mapRelayEdgesToNodes = <T>(edges: Edge<T>[]): T[] => {
		return edges.map(({ node }) => node);
	};

	public static handleRelayConnectionArgs = (
		args: ConnectionArguments,
		limit: number = 50
	): ConnectionArguments => {
		return {
			first: LangUtils.isNil(args.first) ? undefined : Math.min(args.first, limit),
			last: LangUtils.isNil(args.last) ? undefined : Math.min(args.last, limit),
			after: args.after,
			before: args.before
		};
	};

	public static handleRelayCursor = <T extends string | number>(): Options<
		any,
		{ id: T },
		any,
		any
	> => {
		return {
			getCursor: (record) => ({ id: record.id as T }),
			encodeCursor: (cursor) => Buffer.from(JSON.stringify(cursor)).toString("base64"),
			decodeCursor: (cursor) => JSON.parse(Buffer.from(cursor, "base64").toString("ascii"))
		};
	};
}
