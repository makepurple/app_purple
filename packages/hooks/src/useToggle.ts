import { useMemo, useState } from "react";

export const useToggle = (defaultState: boolean = false) => {
	const [isOn, setIsOn] = useState<boolean>(defaultState);

	const toggle = useMemo(() => {
		const fn = (force?: boolean) => () => {
			if (typeof force === "boolean") {
				setIsOn(force);

				return;
			}

			setIsOn((lastOn) => !lastOn);
		};

		fn.on = () => setIsOn(true);
		fn.off = () => setIsOn(false);
		fn.toggle = () => setIsOn((lastOn) => !lastOn);

		return fn;
	}, []);

	return [isOn, toggle] as [typeof isOn, typeof toggle];
};
