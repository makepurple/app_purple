import { FocusTrap } from "@headlessui/react";
import { Anchor, Button, Paper } from "@makepurple/components";
import { useCookieValue } from "@makepurple/hooks";
import React, { CSSProperties, FC, Fragment, useEffect, useState } from "react";
import tw from "twin.macro";
import { GdprCookieConsentContext } from "./context";

const LABEL_ID = "gdpr-cooke-consent-label";
const DESCRIPTION_ID = "gdpr-cookie-consent-description";
const MAX_AGE_DAYS = 365;

const Root = tw(Paper)`
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

export interface GdprCookieConsentProps {
	className?: string;
	style?: CSSProperties;
}

export const GdprCookieConsent: FC<GdprCookieConsentProps> = ({ className, style }) => {
	const [acceptElem, acceptRef] = useState<HTMLButtonElement | null>(null);

	const [consented, updateConsented, deleteConsented] = useCookieValue("gdpr-consented", {
		expires: MAX_AGE_DAYS
	});
	const [dismissed, updateDismissed] = useCookieValue("gdpr-dismissed", {
		expires: MAX_AGE_DAYS
	});

	const open = consented !== "true" && dismissed !== "true";

	useEffect(() => {
		acceptElem?.focus();
	}, [acceptElem]);

	return (
		<GdprCookieConsentContext.Provider value={{ consented: consented === "true" }}>
			{!open ? null : (
				<Root
					className={className}
					role="alertdialog"
					style={style}
					tabIndex={-1}
					aria-labelledby={LABEL_ID}
					aria-describedby={DESCRIPTION_ID}
				>
					<Info>
						<Title id={LABEL_ID}>Cookie consent</Title>
						<Description id={DESCRIPTION_ID}>
							We use cookies to make our site work and understand site usage. By
							clicking &quot;Accept&quot;, you consent to our website&apos;s use of
							cookies. <Anchor>Learn More</Anchor>
						</Description>
					</Info>
					<FocusTrap as={Fragment}>
						<Actions>
							<Button
								ref={acceptRef}
								onClick={() => {
									updateConsented("true");
									updateDismissed("true");
								}}
								size="small"
								type="button"
							>
								Accept
							</Button>
							<Button
								onClick={() => {
									deleteConsented();
									updateDismissed("true");
								}}
								size="small"
								type="button"
								variant="alert"
							>
								No thanks
							</Button>
						</Actions>
					</FocusTrap>
				</Root>
			)}
		</GdprCookieConsentContext.Provider>
	);
};
