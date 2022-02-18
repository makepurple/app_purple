import { Modifier } from "react-popper";

export const SameWidth: Modifier<any> = {
	name: "sameWidth",
	enabled: true,
	phase: "beforeWrite",
	requires: ["computeStyles"],
	fn: ({ state }) => {
		state.styles.popper.width = `${state.rects.reference.width}px`;
	},
	effect: ({ state }) => {
		state.elements.popper.style.width = `${(state.elements.reference as any).offsetWidth}px`;

		return () => undefined;
	}
};
