import { isEuMember } from "is-eu-member";
import ms from "ms";
import { NextMiddleware, NextRequest, NextResponse } from "next/server";

const GDPR_COOKIE_MAX_AGE_SECONDS = ms("1y") / 1_000;

const middleware: NextMiddleware = (req: NextRequest) => {
	const country = req.geo?.country;
	const acceptGdprConsent: boolean = !!country && !isEuMember(country);

	const response = NextResponse.next();

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
