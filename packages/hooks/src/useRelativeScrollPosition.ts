import type { Coordinates } from "@makepurple/typings";
import { WindowUtils } from "@makepurple/utils";
import { useScroll } from "framer-motion";
import { RefObject, useCallback, useEffect, useState } from "react";

export interface UseRelativeScrollPositionOptions {
	onChange?: (relativePosition: Coordinates) => void;
	origin?: Coordinates;
}

export const useRelativeScrollPosition = <T extends HTMLElement>(
	ref: RefObject<T>,
	options: UseRelativeScrollPositionOptions = {}
) => {
	const { onChange, origin } = options;
	const { scrollX, scrollY } = useScroll();

	const getRelativeX = useCallback(
		(windowX: number): number => {
			const elem = ref.current;

			if (!elem) {
				return -Infinity;
			}

			const originX = (origin?.x ?? 0) * (WindowUtils.isBrowser() ? window.innerWidth : 0);

			return windowX + originX - (elem.offsetLeft + elem.offsetWidth);
		},
		[origin, ref]
	);

	const getRelativeY = useCallback(
		(windowY: number): number => {
			const elem = ref.current;

			if (!elem) {
				return -Infinity;
			}

			const originY = (origin?.y ?? 0) * (WindowUtils.isBrowser() ? window.innerHeight : 0);

			return windowY + originY - (elem.offsetTop + elem.offsetHeight);
		},
		[origin, ref]
	);

	const [isRight, setIsRight] = useState<boolean>(getRelativeX(scrollX.get()) > 0);
	const [isBelow, setIsBelow] = useState<boolean>(getRelativeY(scrollY.get()) > 0);

	useEffect(() => {
		const unsubscribeScrollX = scrollX.onChange((x: number) => {
			onChange?.({
				x: getRelativeX(x),
				y: getRelativeY(scrollY.get())
			});

			setIsRight(getRelativeX(x) > 0);
		});

		const unsubscribeScrollY = scrollY.onChange((y: number) => {
			onChange?.({
				x: getRelativeX(scrollX.get()),
				y: getRelativeY(y)
			});

			setIsBelow(getRelativeY(y) > 0);
		});

		return () => {
			unsubscribeScrollX();
			unsubscribeScrollY();
		};
	}, [getRelativeX, getRelativeY, onChange, scrollX, scrollY]);

	useEffect(() => {
		setIsRight(getRelativeX(scrollX.get()) > 0);
		setIsBelow(getRelativeY(scrollY.get()) > 0);
	}, [getRelativeX, getRelativeY, scrollX, scrollY]);

	return { isRight, isBelow };
};
