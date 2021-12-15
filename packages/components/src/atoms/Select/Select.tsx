import { Listbox } from "@headlessui/react";
import { InferComponentProps } from "@makepurple/typings";
import { ObjectUtils } from "@makepurple/utils";
import tw, { styled } from "twin.macro";
import { SelectButton } from "./SelectButton";
import { SelectOption } from "./SelectOption";
import { SelectOptions } from "./SelectOptions";

const _Select = styled(Listbox)`
	${tw`
		relative
		inline-flex
		items-stretch
	`}

	& > * {
		${tw`
			first:flex-grow
		`}
	}
`;

_Select.displayName = "Select";
_Select.defaultProps = {
	forwardedAs: "div"
};

export type SelectProps = InferComponentProps<typeof Listbox>;

export const Select: typeof Listbox & {
	Button: typeof Listbox.Button;
	Option: typeof Listbox.Option;
	Options: typeof Listbox.Options;
} = ObjectUtils.setStatic(_Select as typeof Listbox, {
	Button: SelectButton,
	Option: SelectOption,
	Options: SelectOptions
});
