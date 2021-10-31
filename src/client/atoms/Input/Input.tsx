import { InferComponentProps } from "@/client/types";
import tw from "twin.macro";

export type InputProps = InferComponentProps<typeof Input>;

export const Input = tw.input`
	inline-block
	h-10
	w-full
	px-2.5
	rounded-lg
	border
	border-solid
	border-gray-200
	bg-indigo-50
	text-base
	leading-none
	font-sans
	text-black
	transition
	duration-300
	ease-in-out
	placeholder:text-gray-400
	focus:outline-none
	focus:bg-white
	focus:border-purple-500
`;
