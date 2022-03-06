import { useCookieValue } from "@makepurple/hooks";
import dynamic from "next/dynamic";
import React, { CSSProperties, FC, ReactNode } from "react";
import { GdprCookieConsentContext } from "./context";

const LazyGdprCookieConsent = dynamic(() => import("./LazyGdprCookieConsent"), { ssr: false });

const MAX_AGE_DAYS = 365;

export interface GdprCookieConsentProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const GdprCookieConsent: FC<GdprCookieConsentProps> = ({ children, className, style }) => {
	const [consented, updateConsented, deleteConsented] = useCookieValue("gdpr-consented", {
		expires: MAX_AGE_DAYS
	});
	const [dismissed, updateDismissed] = useCookieValue("gdpr-dismissed", {
		expires: MAX_AGE_DAYS
	});

	const open = consented !== "true" && dismissed !== "true";

	return (
		<GdprCookieConsentContext.Provider value={{ consented: consented === "true" }}>
			{children}
			{!open ? null : (
				<LazyGdprCookieConsent
					className={className}
					onAccept={() => {
						updateConsented("true");
						updateDismissed("true");
					}}
					onDecline={() => {
						deleteConsented();
						updateDismissed("true");
					}}
					style={style}
				/>
			)}
		</GdprCookieConsentContext.Provider>
	);
};
