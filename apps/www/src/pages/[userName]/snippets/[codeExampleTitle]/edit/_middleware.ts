import { getToken } from "next-auth/jwt";
import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";
import { match } from "path-to-regexp";

const middleware = withAuth(async (req) => {
	const { pathname } = req.nextUrl;
	const matchPage = match<{
		codeExampleTitle: string;
		userName: string;
	}>("/:userName/snippets/:codeExampleTitle/edit")(pathname);

	if (!matchPage) return NextResponse.rewrite("/404");

	const jwt = await getToken({ req: req as any });
	const { userName } = matchPage.params;
	const isMyPage = jwt?.name === userName;

	if (!isMyPage) return NextResponse.rewrite("/403");

	return NextResponse.next();
});

export default middleware;
