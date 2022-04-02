import { isEuMember } from "is-eu-member";
import ms from "ms";
import type { NextMiddleware, NextRequest } from "next/server";
import { NextResponse } from "next/server";

const GDPR_COOKIE_MAX_AGE_SECONDS = ms("1y") / 1_000;

const middleware: NextMiddleware = (req: NextRequest) => {
	const { pathname } = req.nextUrl;

	if (pathname.startsWith("/api")) return NextResponse.next();
	if (pathname.startsWith("/banned")) return NextResponse.next();
	if (pathname.startsWith("/rate-limited")) return NextResponse.next();

	const country = req.geo?.country;
	const acceptGdprConsent = !!country && !isEuMember(country);

	if (!acceptGdprConsent) return NextResponse.next();

	const response = NextResponse.next();

	/**
	 * !HACK
	 * @description Auto-accept gdpr for any countries not in the EU
	 * @author David Lee
	 * @date March 5, 2022
	 */
	response.cookie("gdpr-consented", "true", {
		maxAge: GDPR_COOKIE_MAX_AGE_SECONDS
	});

	return response;
};

export default middleware;
