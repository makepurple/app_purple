/* eslint-disable no-console */
export const Logger = {
	error: (...args: any[]) => {
		if (process.env.NODE_ENV !== "production") {
			console.log(...args);
		}
	},
	info: (...args: any[]) => {
		if (process.env.NODE_ENV !== "production") {
			console.log(...args);
		}
	}
};
