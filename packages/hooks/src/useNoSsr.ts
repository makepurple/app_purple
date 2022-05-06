import {
	createElement,
	Fragment,
	ReactChild,
	ReactElement,
	useCallback,
	useEffect,
	useState
} from "react";

/**
 * @description Ensure that a component is rendered only on the client. This is helpful for
 *     rendering client-only components that either do not support SSR, or may render different DOM
 *     trees between the server and client (which will yield warnings).
 */
export const useNoSsr = () => {
	const [didMount, setDidMount] = useState<boolean>(false);

	useEffect(() => setDidMount(typeof window !== "undefined"), []);

	const noSsr = useCallback(
		<T extends ReactChild>(
			element: T,
			fallback: ReactElement = createElement(Fragment, {}, "")
		) => {
			return didMount ? element : fallback;
		},
		[didMount]
	);

	return noSsr;
};
