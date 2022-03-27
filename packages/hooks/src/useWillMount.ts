import { useRef } from "react";

export const useWillMount = (effect: () => void): void => {
	const willMount = useRef<boolean>(true);

	willMount.current && effect();

	willMount.current = false;
};
