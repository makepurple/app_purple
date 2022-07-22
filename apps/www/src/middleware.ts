import { isEuMember } from "is-eu-member";
import ms from "ms";
import { getToken } from "next-auth/jwt";
import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import { NextUtils } from "./utils/next.util";

const GDPR_COOKIE_MAX_AGE_SECONDS = ms("1y") / 1_000;

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

const setResponseHeaders = (response: NextResponse) => {
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
};

const handleGdprConsent = (req: NextRequest, response: NextResponse) => {
	const country = req.geo?.country;
	const acceptGdprConsent = !!country && !isEuMember(country);

	if (!acceptGdprConsent) return;

	/**
	 * !HACK
	 * @description Auto-accept gdpr for any countries not in the EU
	 * @author David Lee
	 * @date March 5, 2022
	 */
	response.cookies.set("gdpr-consented", "true", {
		maxAge: GDPR_COOKIE_MAX_AGE_SECONDS
	});
};

export default withAuth(
	async (req: NextRequestWithAuth) => {
		const jwt = await getToken({ req });
		const response =
			(await NextUtils.matchPath(req, [
				["/", () => (jwt ? NextResponse.redirect(NextUtils.getUrl(req, "/feed")) : null)],
				[
					"/login",
					() => (jwt ? NextResponse.redirect(NextUtils.getUrl(req, "/feed")) : null)
				],
				["/new-user", () => NextResponse.redirect(NextUtils.getUrl(req, `/${jwt?.name}`))],
				[
					"/signup",
					() => (jwt ? NextResponse.redirect(NextUtils.getUrl(req, "/feed")) : null)
				],
				[
					"/:userName/connections/requests",
					(params: { userName: string }) => {
						const isMyPage = jwt?.name === params.userName;

						return !isMyPage
							? NextResponse.redirect(NextUtils.getUrl(req, "/403"))
							: null;
					}
				],
				[
					"/:userName/draft",
					(params: { userName: string }) => {
						const isMyPage = jwt?.name === params.userName;

						return !isMyPage
							? NextResponse.redirect(NextUtils.getUrl(req, "/403"))
							: null;
					}
				],
				[
					"/:userName/snippets/new",
					(params: { userName: string }) => {
						const isMyPage = jwt?.name === params.userName;

						return !isMyPage
							? NextResponse.redirect(NextUtils.getUrl(req, "/403"))
							: null;
					}
				],
				[
					"/:userName/snippets/:codeExampleTitle/edit",
					(params: { userName: string }) => {
						const isMyPage = jwt?.name === params.userName;

						return !isMyPage
							? NextResponse.redirect(NextUtils.getUrl(req, "/403"))
							: null;
					}
				],
				[
					"/:userName/:postTitle/edit",
					(params: { userName: string }) => {
						const isMyPage = jwt?.name === params.userName;

						return !isMyPage
							? NextResponse.redirect(NextUtils.getUrl(req, "/403"))
							: null;
					}
				]
			])) ?? NextResponse.next();

		setResponseHeaders(response);
		handleGdprConsent(req, response);

		return response;
	},
	{
		callbacks: {
			authorized: async ({ req, token }) => {
				const authorized = await NextUtils.matchPath(req, [
					["/account", () => !!token],
					["/messaging", () => !!token],
					["/messaging/:slug*", () => !!token],
					["/new-user", () => !!token],
					["/notifications", () => !!token],
					["/:userName/connections/requests", () => !!token],
					["/:userName/draft", () => !!token],
					["/:userName/snippets/new", () => !!token],
					["/:userName/snippets/:codeExampleTitle/edit", () => !!token],
					["/:userName/:postTitle/edit", () => !!token]
				]);

				return authorized ?? true;
			}
		},
		pages: {
			newUser: "/new-user",
			signIn: "/signup",
			signOut: "/"
		},
		secret: process.env.NEXTAUTH_SECRET
	}
);
