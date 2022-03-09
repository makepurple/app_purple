import { getToken } from "next-auth/jwt";
import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";
import { match } from "path-to-regexp";
import { NextUtils } from "../../../../utils/next.util";

const middleware = withAuth(async (req) => {
	const { pathname } = req.nextUrl;
	const matchPage = match<{ userName: string }>("/:userName/snippets/new")(pathname);

	if (!matchPage) return NextResponse.rewrite(NextUtils.getUrl(req, "/404"));

	const jwt = await getToken({ req: req as any });
	const { userName } = matchPage.params;
	const isMyPage = jwt?.name === userName;

	if (!isMyPage) return NextResponse.rewrite(NextUtils.getUrl(req, "/403"));

	return NextResponse.next();
});

export default middleware;
