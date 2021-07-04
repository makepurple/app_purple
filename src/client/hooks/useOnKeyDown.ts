import Keycode from "keycode-js";
import { KeyboardEvent, KeyboardEventHandler, useCallback, useEffect } from "react";

interface IUseOnKeyDownOptions {
	global?: boolean;
	key: keyof typeof Keycode;
}

/**
 * !HACK
 * @description
 * This is a hack that depends on the keycode-js library having all export keys
 * be mapped as CODE_ or KEY_ or VALUE_ with a suffix.
 * @author David Lee
 * @date July 4, 2021
 */
export const useOnKeyDown = <T extends HTMLElement>(
	options: IUseOnKeyDownOptions,
	callback: KeyboardEventHandler<T>
) => {
	const { global = false, key } = options;

	const suffix = key.split("_").slice(1).join("_");

	const onKeyDown = useCallback(
		(event: KeyboardEvent<T>): KeyboardEvent<T> => {
			const isKey = event.key === Keycode[`VALUE_${suffix}`];
			const isKeyCode = event.keyCode === Keycode[`KEY_${suffix}`];
			const isCode = event.code === Keycode[`CODE_${suffix}`];

			if (isKey || isKeyCode || isCode) callback(event);

			return event;
		},
		[callback, suffix]
	);

	useEffect(() => {
		if (!global) {
			return;
		}

		document.body.addEventListener("keydown", onKeyDown as any);
		document.body.addEventListener("keydown", onKeyDown as any);

		return () => {
			document.body.removeEventListener("keydown", onKeyDown as any);
			document.body.removeEventListener("keydown", onKeyDown as any);
		};
	}, [global, onKeyDown]);

	return onKeyDown;
};
