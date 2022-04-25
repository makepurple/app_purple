import { Menu } from "@headlessui/react";
import { WindowUtils } from "@makepurple/utils";
import copyToClipboard from "copy-to-clipboard";
import React, { FC, Fragment, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import {
	LinkedinIcon,
	LinkedinShareButton,
	RedditIcon,
	RedditShareButton,
	TwitterIcon,
	TwitterShareButton
} from "react-share";
import tw from "twin.macro";
import { Button, ButtonProps, ListItem, toast } from "../../atoms";
import { CopyIcon } from "../../svgs";

const ShareItems = tw.div`
	inline-flex
	flex-col
	items-stretch
	mt-1
	p-0.5
	rounded-lg
	bg-white
	shadow-2xl
	z-10
`;

const ShareItem = tw(ListItem)`
	gap-2
	p-1
	pr-3
`;

const CopyIconContainer = tw.div`
	flex
	items-center
	justify-center
	h-8
	w-8
`;

export interface ShareButtonUtmParams {
	campaign?: string;
	content?: string;
	term?: string;
}

export interface ShareButtonShareParams {
	url: string;
	text: string;
	title: string;
}

export type ShareButtonProps = ButtonProps & {
	// share parameters
	share: ShareButtonShareParams;
	// Tags used for Twitter
	tags?: readonly string[];
	// utm query parameters
	utm?: ShareButtonUtmParams;
};

export const ShareButton: FC<ShareButtonProps> = ({ share, tags, utm, ...buttonProps }) => {
	const [refElem, refRef] = useState<HTMLButtonElement | null>(null);
	const [popperElem, popperRef] = useState<HTMLDivElement | null>(null);

	const { attributes, styles } = usePopper(refElem, popperElem, {
		placement: "bottom-start",
		strategy: "fixed"
	});

	const getShareUrl = useCallback(
		(source: string) => {
			const _url = new URL(share.url);

			_url.searchParams.append("utm_source", source);
			_url.searchParams.append("utm_medium", "organic_social");

			!!utm?.campaign && _url.searchParams.append("utm_campaign", utm.campaign);
			!!utm?.content && _url.searchParams.append("utm_content", utm.content);
			!!utm?.term && _url.searchParams.append("utm_term", utm.term);

			return _url.toString();
		},
		[share.url, utm]
	);

	const canNativeShare =
		WindowUtils.isBrowser() &&
		typeof navigator !== "undefined" &&
		typeof navigator.share === "function" &&
		navigator.canShare(share);

	return (
		<Menu as={Fragment}>
			{({ open }) => (
				<>
					<Menu.Button
						as={Button}
						{...buttonProps}
						ref={refRef}
						onClick={async () => {
							if (!canNativeShare) return;

							await navigator.share(share);
						}}
					/>
					{WindowUtils.isBrowser() &&
						open &&
						!canNativeShare &&
						createPortal(
							<Menu.Items
								as={ShareItems}
								ref={popperRef}
								static
								style={styles.popper}
								{...attributes.popper}
							>
								<Menu.Item>
									{(itemProps) => (
										<TwitterShareButton
											hashtags={tags?.slice()}
											title={share.title}
											url={getShareUrl("twitter")}
										>
											<ShareItem {...itemProps}>
												<TwitterIcon size={32} borderRadius={8} />
												<span>Twitter</span>
											</ShareItem>
										</TwitterShareButton>
									)}
								</Menu.Item>
								<Menu.Item>
									{(itemProps) => (
										<LinkedinShareButton
											source="MakePurple"
											title={share.title}
											url={getShareUrl("linkedin")}
										>
											<ShareItem {...itemProps}>
												<LinkedinIcon size={32} borderRadius={8} />
												<span>LinkedIn</span>
											</ShareItem>
										</LinkedinShareButton>
									)}
								</Menu.Item>
								<Menu.Item>
									{(itemProps) => (
										<RedditShareButton
											title={share.title}
											url={getShareUrl("reddit")}
										>
											<ShareItem {...itemProps}>
												<RedditIcon size={32} borderRadius={8} />
												<span>Reddit</span>
											</ShareItem>
										</RedditShareButton>
									)}
								</Menu.Item>
								<Menu.Item>
									{(itemProps) => (
										<ShareItem
											{...itemProps}
											onClick={() => {
												copyToClipboard(getShareUrl("copy"));

												toast.success("Copied!");
											}}
										>
											<CopyIconContainer>
												<CopyIcon height={24} width={24} />
											</CopyIconContainer>
											<span>Copy Url</span>
										</ShareItem>
									)}
								</Menu.Item>
							</Menu.Items>,
							document.body
						)}
				</>
			)}
		</Menu>
	);
};
