import { ObjectUtils } from "@/utils";
import NextHead from "next/head";
import React, { FC } from "react";
import { HeadMetaDescription, HeadMetaDescriptionProps } from "./HeadMetaDescription";
import { HeadMetaImage, HeadMetaImageProps } from "./HeadMetaImage";
import { HeadMetaMisc, HeadMetaMiscProps } from "./HeadMetaMisc";
import { HeadMetaTitle, HeadMetaTitleProps } from "./HeadMetaTitle";

const OG_TTL = 345600;

export interface MetaProps
	extends Partial<HeadMetaDescriptionProps>,
		HeadMetaImageProps,
		HeadMetaMiscProps,
		HeadMetaTitleProps {}

const _HeadMeta: FC<MetaProps> = ({
	canonical,
	description,
	imageSrc,
	ogType = "website",
	robots,
	title
}) => {
	return (
		<>
			<HeadMetaTitle title={title} />
			{description && <HeadMetaDescription description={description} />}
			<HeadMetaImage imageSrc={imageSrc} />
			<HeadMetaMisc canonical={canonical} ogType={ogType} robots={robots} />
			<NextHead>
				<meta key="og:site_name" content="Openbase" property="og:site_name" />
				<meta key="og:ttl" content={OG_TTL.toString()} property="og:ttl" />
				<meta key="twitter:site" content="@openbase" name="twitter:site" />
				<meta key="twitter:card" content="summary_large_image" name="twitter:card" />
			</NextHead>
		</>
	);
};

export const HeadMeta = ObjectUtils.setStatic(_HeadMeta, {
	Description: HeadMetaDescription,
	Image: HeadMetaImage,
	Misc: HeadMetaMisc,
	Title: HeadMetaTitle
});
