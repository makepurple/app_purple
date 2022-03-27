import { WindowUtils } from "packages/utils/src";
import { useEffect, useState } from "react";

const hasFocus = () => {
	/**
	 * !HACK
	 * @description If no document, default to true for SSR purposes
	 * @author David Lee
	 * @date March 26, 2022
	 */
	return typeof document !== "undefined" ? document.hasFocus() : true;
};

export const useWindowFocus = () => {
	const [focused, setFocused] = useState<boolean>(hasFocus());

	const isBrowser: boolean = WindowUtils.isBrowser();

	useEffect(() => {
		/**
		 * !HACK
		 * @description focus for additional renders
		 * @author David Lee
		 * @date March 26, 2022
		 */
		setFocused(hasFocus());

		if (!isBrowser) return;

		const onFocus = () => setFocused(true);
		const onBlur = () => setFocused(false);

		window.addEventListener("focus", onFocus);
		window.addEventListener("blur", onBlur);

		return () => {
			window.removeEventListener("focus", onFocus);
			window.removeEventListener("blur", onBlur);
		};
	}, [isBrowser]);

	return focused;
};
