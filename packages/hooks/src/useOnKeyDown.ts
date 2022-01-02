import * as Keycode from "keycode-js";
import { KeyboardEvent, KeyboardEventHandler, useCallback, useEffect } from "react";

type KeycodeCode<T extends keyof typeof Keycode> = T extends `CODE_${infer U}`
	? U
	: T extends `KEY_${infer U}`
	? U
	: T extends `VALUE_${infer U}`
	? U
	: never;

export type KeyCode = KeycodeCode<keyof typeof Keycode>;

export interface UseOnKeyDownOptions {
	global?: boolean;
	key: KeyCode;
}

export const keyDown = <T extends HTMLElement>(key: KeyCode, callback: KeyboardEventHandler) => {
	return (event: KeyboardEvent<T>) => {
		const valueCode = Keycode[`VALUE_${key}`] ?? null;
		const keyCode = Keycode[`KEY_${key}`] ?? null;
		const codeCode = Keycode[`CODE_${key}`] ?? null;

		const isKey = !!valueCode && event.key === valueCode;
		const isKeyCode = !!keyCode && event.keyCode === keyCode;
		const isCode = !!codeCode && event.code === codeCode;

		if (isKey || isKeyCode || isCode) callback(event);

		return event;
	};
};

/**
 * !HACK
 * @description
 * This is a hack that depends on the keycode-js library having all export keys
 * be mapped as CODE_ or KEY_ or VALUE_ with a suffix.
 * @author David Lee
 * @date July 4, 2021
 */
export const useOnKeyDown = <T extends HTMLElement>(
	options: UseOnKeyDownOptions,
	callback: KeyboardEventHandler<T>
) => {
	const { global = false, key } = options;

	const onKeyDown = useCallback(
		(event: KeyboardEvent<T>): KeyboardEvent<T> => {
			const valueCode = Keycode[`VALUE_${key}`] ?? null;
			const keyCode = Keycode[`KEY_${key}`] ?? null;
			const codeCode = Keycode[`CODE_${key}`] ?? null;

			const isKey = !!valueCode && event.key === valueCode;
			const isKeyCode = !!keyCode && event.keyCode === keyCode;
			const isCode = !!codeCode && event.code === codeCode;

			if (isKey || isKeyCode || isCode) callback(event);

			return event;
		},
		[callback, key]
	);

	useEffect(() => {
		if (!global) return;

		document.body.addEventListener("keydown", onKeyDown as any);

		return () => {
			document.body.removeEventListener("keydown", onKeyDown as any);
		};
	}, [global, onKeyDown]);

	return onKeyDown;
};
