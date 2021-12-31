import { useEffect, useRef } from "react";

/**
 * @see (@link: https://usehooks.com/useWhyDidYouUpdate/)
 */
export const useWhyDidYouUpdate = <T extends Record<string, any>>(name: string, props: T) => {
	// Get a mutable ref object where we can store props ...
	// ... for comparison next time this hook runs.
	const previousProps = useRef<Partial<T>>({});

	useEffect(() => {
		/**
		 * !HACK
		 * @description We're wrapping this entire block in this env conditional, because Webpack
		 * will remove this block and conditional entirely from the production bundle if done this
		 * way.
		 * @author David Lee
		 * @date December 30, 2021
		 */
		if (process.env.NODE_ENV === "development") {
			if (previousProps.current) {
				// Get all keys from previous and current props
				const allKeys = Object.keys({ ...previousProps.current, ...props });
				// Use this object to keep track of changed props
				const changesObj: Partial<Record<keyof T, { from: any; to: any }>> = {};

				// Iterate through keys
				allKeys.forEach((key: keyof T) => {
					// If previous is different from current
					if (previousProps.current[key] !== props[key]) {
						// Add to changesObj
						changesObj[key] = {
							from: previousProps.current[key],
							to: props[key]
						};
					}
				});

				// If changesObj not empty then output to console
				if (Object.keys(changesObj).length) {
					// eslint-disable-next-line no-console
					console.log("[why-did-you-update]", name, changesObj);
				}
			}

			// Finally update previousProps with current props for next hook call
			previousProps.current = props;
		}
	});
};
