import { RefObject, SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
import { useOnKeyDown } from "./useOnKeyDown";

export interface UseContextMenuOptions {
	disabled?: boolean;
	onClose?: (event: SyntheticEvent) => void;
}

export const useContextMenu = <TElement extends HTMLElement>(
	ref: RefObject<TElement>,
	options: UseContextMenuOptions = {}
) => {
	const { disabled, onClose } = options;

	const [position, setPosition] = useState<Maybe<{ x: number; y: number }>>();

	const onContextMenu = useCallback(
		(event: MouseEvent) => {
			event.preventDefault();

			if (disabled) return;

			setPosition({
				x: event.pageX,
				y: event.pageY
			});
		},
		[disabled]
	);

	useOnClickOutside(ref, (event) => {
		setPosition(null);
		onClose?.(event);
	});

	useOnKeyDown({ global: true, key: "ESCAPE" }, (event) => {
		setPosition(null);
		onClose?.(event);
	});

	useEffect(() => {
		const elem = ref.current;

		if (!elem) return;

		elem.addEventListener("contextmenu", onContextMenu);
	}, [onContextMenu, ref]);

	return {
		contextMenuProps: { position },
		isOpen: !!position
	};
};
