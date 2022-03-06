import { NextRequest, NextResponse } from "next/server";
import { match } from "path-to-regexp";

export const middleware = (req: NextRequest) => {
	const url = req.nextUrl;
	const skillMatch = match<{ skillOwner: string; skillName: string }>(
		"/s/:skillOwner/:skillName",
		{ decode: decodeURIComponent }
	)(url.pathname);

	if (skillMatch) {
		const { skillName, skillOwner } = skillMatch.params;
		const tab = url.searchParams.get("tab");

		switch (tab) {
			case "explore":
				return NextResponse.rewrite(`/s-tab/explore/${skillOwner}/${skillName}`);
			case "followers":
				return NextResponse.rewrite(`/s-tab/followers/${skillOwner}/${skillName}`);
			case "snippets":
				return NextResponse.rewrite(`/s-tab/snippets/${skillOwner}/${skillName}`);
			default:
				return NextResponse.next();
		}
	}

	return NextResponse.next();
};
