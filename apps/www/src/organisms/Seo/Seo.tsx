import { ObjectUtils } from "@makepurple/utils";
import NextHead from "next/head";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { SeoDescription, SeoDescriptionProps } from "./SeoDescription";
import { SeoImage, SeoImageProps } from "./SeoImage";
import { SeoMisc, SeoMiscProps } from "./SeoMisc";
import { SeoTitle, SeoTitleProps } from "./SeoTitle";

const OG_TTL = 345600;

export interface MetaProps
	extends Partial<SeoDescriptionProps>,
		SeoImageProps,
		SeoMiscProps,
		SeoTitleProps {}

const _Seo: FC<MetaProps> = ({
	canonical: _canonical,
	description,
	imageSrc,
	ogType = "website",
	postfix,
	robots,
	title
}) => {
	const router = useRouter();
	const canonical = _canonical ?? router.asPath;

	return (
		<>
			<SeoTitle postfix={postfix} title={title} />
			{description && <SeoDescription description={description} />}
			<SeoImage imageSrc={imageSrc} />
			<SeoMisc canonical={canonical} ogType={ogType} robots={robots} />
			<NextHead>
				<meta key="og:site_name" content="MakePurple" property="og:site_name" />
				<meta key="og:ttl" content={OG_TTL.toString()} property="og:ttl" />
				<meta key="twitter:site" content="@makepurpleio" name="twitter:site" />
				<meta key="twitter:card" content="summary_large_image" name="twitter:card" />
			</NextHead>
		</>
	);
};

export const Seo = ObjectUtils.setStatic(_Seo, {
	Description: SeoDescription,
	Image: SeoImage,
	Misc: SeoMisc,
	Title: SeoTitle
});
