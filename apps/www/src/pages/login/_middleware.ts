import { getToken } from "next-auth/jwt";
import { NextMiddleware, NextResponse } from "next/server";

const middleware: NextMiddleware = async (req) => {
	const jwt = await getToken({ req: req as any });

	if (!jwt) return NextResponse.next();

	return NextResponse.redirect("/");
};

export default middleware;
