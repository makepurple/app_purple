import { Modifier } from "react-popper";

export const Offset = (options: { offset?: number }): Modifier<any> => {
	const { offset = 0 } = options ?? {};

	return {
		name: "offset",
		options: {
			offset: ({ placement }) => {
				switch (placement) {
					case "bottom":
					case "bottom-end":
					case "bottom-start":
					case "top":
					case "top-end":
					case "top-start":
						return [0, offset];
					default:
						return [0, offset];
				}
			}
		}
	};
};
