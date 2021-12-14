import { useCallback, useMemo, useState } from "react";

export const useUncontrolledProp = <T extends unknown>(prop: T | undefined, defaultValue: T) => {
	const [controlled, setControlled] = useState<T>(defaultValue);

	const setProp = useCallback(
		(newValue: T | ((newValue: T) => T)) => {
			if (prop !== undefined) {
				return;
			}

			setControlled(newValue);
		},
		[prop]
	);

	const finalProp: T = prop === undefined ? controlled : prop;

	return useMemo(() => [finalProp, setProp] as [T, typeof setProp], [finalProp, setProp]);
};
