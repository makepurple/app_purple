import type { SSRData } from "@urql/core/dist/types/exchanges/ssr";
import { GetServerSideProps, GetStaticProps } from "next";
import type { NextURL } from "next/dist/server/web/next-url";
import { NextRequest } from "next/server";
import { URQL_STATE_PROP_NAME } from "../graphql";

export interface WithInitialUrqlState {
	[URQL_STATE_PROP_NAME]: SSRData;
}

export class NextUtils {
	public static castSSRProps = <P>(
		fn: GetServerSideProps<WithInitialUrqlState & P>
	): GetServerSideProps<NonNullable<WithInitialUrqlState & P>> => {
		return fn as GetServerSideProps<NonNullable<WithInitialUrqlState & P>>;
	};

	public static castStaticProps = <P>(
		fn: GetStaticProps<WithInitialUrqlState & P>
	): GetStaticProps<NonNullable<WithInitialUrqlState & P>> => {
		return fn as GetStaticProps<NonNullable<WithInitialUrqlState & P>>;
	};

	public static getUrl(req: NextRequest, pathName?: string): NextURL {
		const url = req.nextUrl.clone();

		if (pathName) {
			url.pathname = pathName;
		}

		return url;
	}
}
