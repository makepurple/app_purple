import type { SSRData } from "@urql/core/dist/types/exchanges/ssr";
import type { GetServerSideProps, GetStaticProps } from "next";
import type { NextURL } from "next/dist/server/web/next-url";
import type { NextRequest } from "next/server";
import { match, Path } from "path-to-regexp";

const URQL_STATE_PROP_NAME = "__URQL_STATE__";

export interface WithInitialUrqlState {
	[URQL_STATE_PROP_NAME]: SSRData;
}

export type NextUtilsMatchPathConfigTuple<TParams extends object, TReturn extends any> = readonly [
	path: Path,
	callback: (params: TParams) => MaybePromise<TReturn>
];

export type NextUtilsMatchPatchConfig<T extends NextUtilsMatchPathConfigTuple<any, any>> =
	readonly T[];

export class NextUtils {
	public static castSSRProps<P>(
		fn: GetServerSideProps<WithInitialUrqlState & P>
	): GetServerSideProps<NonNullable<WithInitialUrqlState & P>> {
		return fn as GetServerSideProps<NonNullable<WithInitialUrqlState & P>>;
	}

	public static castStaticProps<P>(
		fn: GetStaticProps<WithInitialUrqlState & P>
	): GetStaticProps<NonNullable<WithInitialUrqlState & P>> {
		return fn as GetStaticProps<NonNullable<WithInitialUrqlState & P>>;
	}

	public static concurrent<T extends readonly unknown[] | []>(
		values: T
	): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> } | undefined[]> {
		return Promise.all(values).catch((e) => {
			if (process.env.NODE_ENV === "development") throw e;

			return values.map(() => undefined);
		});
	}

	public static getUrl(req: NextRequest, pathName?: string): NextURL {
		const url = req.nextUrl.clone();

		if (pathName) {
			url.pathname = pathName;
		}

		return url;
	}

	public static matchPath<T extends NextUtilsMatchPathConfigTuple<any, any>>(
		req: NextRequest,
		config: NextUtilsMatchPatchConfig<T>
	): Promise<null | ReturnType<T[1]>> {
		const { nextUrl } = req;
		const { pathname } = nextUrl;

		const matched = config.find(([path]) => !!match(path)(pathname));

		if (!matched) return Promise.resolve(null);

		const [path, callback] = matched;

		const matchPage = match(path)(pathname);

		if (!matchPage) return Promise.resolve(null);

		const params = matchPage.params;

		return Promise.resolve(callback(params));
	}
}
