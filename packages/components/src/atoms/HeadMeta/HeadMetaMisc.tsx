import NextHead from "next/head";
import { useRouter } from "next/router";
import React, { FC, useMemo } from "react";

export interface HeadMetaMiscProps {
	canonical?: string;
	ogType?: string;
	robots?: {
		follow?: boolean;
		index?: boolean;
	};
}

export const HeadMetaMisc: FC<HeadMetaMiscProps> = ({
	canonical: _canonical,
	ogType,
	robots: { index = false, follow = false } = {}
}) => {
	const router = useRouter();

	const locale = router?.locale;

	const canonical = `https://makepurple.io${_canonical}`;

	const robots: readonly string[] = useMemo(
		() => [index ? "index" : "noindex", follow ? "follow" : "nofollow"],
		[index, follow]
	);

	return (
		<NextHead>
			{locale && (
				<meta key="og:locale" content={locale.replace("-", "_")} property="og:locale" />
			)}
			{ogType && <meta key="og:type" content={ogType} property="og:type" />}
			{canonical && (
				<>
					<link rel="canonical" href={canonical} />
					<meta key="og:url" content={canonical} property="og:url" />
				</>
			)}
			{robots && <meta key="robots" content={robots.join(",")} name="robots" />}
		</NextHead>
	);
};
