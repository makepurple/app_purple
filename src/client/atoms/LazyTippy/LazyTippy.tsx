import { WindowUtils } from "@/utils";
import type { TippyProps } from "@tippyjs/react";
import dynamic from "next/dynamic";
import React, {
	createContext,
	Dispatch,
	FC,
	SetStateAction,
	useContext,
	useEffect,
	useState
} from "react";

const LoadingContext = createContext<{
	setLoading: Dispatch<SetStateAction<boolean>>;
}>({
	setLoading: () => undefined
});

const Tippy = dynamic(() => import("@tippyjs/react"), {
	ssr: false,
	loading: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const { setLoading } = useContext(LoadingContext);

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			setLoading(true);

			return () => {
				setLoading(false);
			};
		}, [setLoading]);

		return null;
	}
});

export type LazyTippyProps = TippyProps;

export const LazyTippy: FC<LazyTippyProps> = (props) => {
	const { children } = props;

	const [loading, setLoading] = useState<boolean>(false);

	return (
		<LoadingContext.Provider value={{ setLoading }}>
			{WindowUtils.isSsr() || loading ? children : <Tippy {...props} />}
		</LoadingContext.Provider>
	);
};
