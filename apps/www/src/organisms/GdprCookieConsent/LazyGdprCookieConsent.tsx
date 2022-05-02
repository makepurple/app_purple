import { FocusTrap } from "@headlessui/react";
import { Anchor, Backdrop, Button, Paper } from "@makepurple/components";
import { StyleUtils } from "@makepurple/utils";
import React, { CSSProperties, FC, Fragment, useEffect, useState } from "react";
import tw, { styled } from "twin.macro";

const LABEL_ID = "gdpr-cooke-consent-label";
const DESCRIPTION_ID = "gdpr-cookie-consent-description";

const Root = styled(Paper)`
	${tw`
		fixed
		inset-x-0
		bottom-0
		flex
		flex-row
		flex-wrap
		items-center
		gap-4
		p-4
		rounded-none
		shadow-2xl
	`}
	z-index: ${StyleUtils.getZIndex("cookie-consent")};
`;

const StyledBackdrop = styled(Backdrop)`
	z-index: ${StyleUtils.getZIndex("cookie-consent-backdrop")};
`;

const Info = tw.div`
	flex
	flex-col
	flex-grow
	gap-2
`;

const Title = tw.span`
	text-base
	leading-none
	font-semibold
`;

const Description = tw.p`
	text-sm
	text-gray-500
`;

const Actions = tw.div`
	flex-shrink-0
	flex
	flex-row
	items-center
	gap-3
	min-w-0
`;

export interface LazyGdprCookieConsentProps {
	className?: string;
	onAccept: () => void;
	onDecline: () => void;
	style?: CSSProperties;
}

export const LazyGdprCookieConsent: FC<LazyGdprCookieConsentProps> = ({
	className,
	onAccept,
	onDecline,
	style
}) => {
	const [acceptElem, acceptRef] = useState<HTMLButtonElement | null>(null);

	useEffect(() => {
		acceptElem?.focus();
	}, [acceptElem]);

	return (
		<Root
			className={className}
			role="alertdialog"
			style={style}
			tabIndex={-1}
			aria-labelledby={LABEL_ID}
			aria-describedby={DESCRIPTION_ID}
		>
			<StyledBackdrop open />
			<Info>
				<Title id={LABEL_ID}>Cookie consent</Title>
				<Description id={DESCRIPTION_ID}>
					We use cookies to make our site work and understand site usage. By clicking
					&quot;Accept&quot;, you consent to our website&apos;s use of cookies.{" "}
					<Anchor>Learn More</Anchor>
				</Description>
			</Info>
			<FocusTrap as={Fragment}>
				<Actions>
					<Button
						ref={acceptRef}
						onClick={() => {
							onAccept();
						}}
						size="small"
						type="button"
					>
						Accept
					</Button>
					<Button
						onClick={() => {
							onDecline();
						}}
						size="small"
						type="button"
						variant="secondary"
					>
						No thanks
					</Button>
				</Actions>
			</FocusTrap>
		</Root>
	);
};

export default LazyGdprCookieConsent;
