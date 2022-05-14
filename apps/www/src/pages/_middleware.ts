import { isEuMember } from "is-eu-member";
import ms from "ms";
import { getToken } from "next-auth/jwt";
import type { NextMiddleware, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { NextUtils } from "../utils";

const GDPR_COOKIE_MAX_AGE_SECONDS = ms("1y") / 1_000;

const middleware: NextMiddleware = async (req: NextRequest) => {
	const { pathname } = req.nextUrl;

	const jwt = await getToken({ req });

	const response =
		jwt && pathname === "/"
			? NextResponse.rewrite(NextUtils.getUrl(req, "/feed"))
			: NextResponse.next();

	const ContentSecurityPolicy = `
		default-src 'self';
		script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.cloudinary.com *.googletagmanager.com;
		child-src *.youtube.com *.google.com *.twitter.com;
		style-src 'self' 'unsafe-inline' *.googleapis.com;
		img-src * blob: data:;
		media-src 'none';
		connect-src *;
		font-src fonts.gstatic.com;
	`;

	response.headers.set("Content-Security-Policy", ContentSecurityPolicy.replace(/\n/g, ""));
	response.headers.set("Referrer-Policy", "origin-when-cross-origin");
	response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
	response.headers.set(
		"Strict-Transport-Security",
		"max-age=31536000; includeSubDomains; preload"
	);
	response.headers.set("X-Frame-Options", "DENY");
	response.headers.set("X-Content-Type-Options", "nosniff");
	response.headers.set("X-DNS-Prefetch-Control", "on");

	if (pathname.startsWith("/api")) return response;
	if (pathname.startsWith("/banned")) return response;

	const country = req.geo?.country;
	const acceptGdprConsent = !!country && !isEuMember(country);

	if (!acceptGdprConsent) return response;

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
