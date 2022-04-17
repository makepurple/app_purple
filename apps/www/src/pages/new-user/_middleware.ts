import { getToken } from "next-auth/jwt";
import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";
import { NextUtils } from "../../utils/next.util";

const middleware = withAuth(async (req) => {
	const jwt = await getToken({ req: req as any });

	if (!jwt) return NextResponse.redirect(NextUtils.getUrl(req, "/signup"));

	return NextResponse.redirect(NextUtils.getUrl(req, `/${jwt?.name}`));
});

export default middleware;
