import { redis } from "@makepurple/server";
import RateLimiter from "async-ratelimiter";
import { isEuMember } from "is-eu-member";
import ms from "ms";
import type { NextMiddleware, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { NextUtils } from "../utils";

const GDPR_COOKIE_MAX_AGE_SECONDS = ms("1y") / 1_000;

const rateLimiter = new RateLimiter({
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	db: redis.instance!,
	duration: ms("1m"),
	max: 60
});

const middleware: NextMiddleware = async (req: NextRequest) => {
	const { pathname } = req.nextUrl;

	if (pathname.startsWith("/api")) return NextResponse.next();
	if (pathname.startsWith("/banned")) return NextResponse.next();
	if (pathname.startsWith("/rate-limited")) return NextResponse.next();

	if (!req.ip) {
		return NextResponse.redirect(NextUtils.getUrl(req, "/500"));
	}

	const limit = await rateLimiter.get({ id: req.ip });

	if (!limit.remaining) {
		return NextResponse.redirect(NextUtils.getUrl(req, "/rate-limited"));
	}

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
