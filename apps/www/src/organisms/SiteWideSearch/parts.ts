import { Button, Input, Paper } from "@makepurple/components";
import tw, { styled } from "twin.macro";

export const InputContainer = tw.div`
	flex
	flex-row
	items-stretch
	rounded-lg
	border
	border-transparent
	sm:border-gray-300
`;

export const SearchInputContainer = tw.div`
	flex-basis[0]
	flex-grow
	w-auto
	min-w-0
	transition-all
	duration-150
	ease-in
	focus-within:flex-grow[8]
	focus-within:z-index[1]
`;

export const SearchInput = tw(Input)`
	border-transparent
	rounded-lg
	h-11
`;

export const OwnerSearch = tw(SearchInput)`
	rounded-r-none
	border-r-gray-300/80
`;

export const SkillSearch = tw(SearchInput)`
	rounded-none
	border-l-gray-300/80
`;

export const Results = tw(Paper)`
	max-h-96
	overflow-y-auto
`;

export const SearchButton = tw(Button)`
	flex-shrink-0
	h-11
	w-11
	ml-auto
	p-0
	bg-white
	bg-opacity-80
	not-disabled:hover:-translate-y-0.5
	sm:border-0
	sm:border-l
	sm:border-opacity-60
	sm:rounded-l-none
	sm:not-disabled:hover:translate-y-0
`;

export const Root = styled.form`
	&:not(:focus-within) {
		& ${SearchInputContainer as any} {
			${tw`
				flex-grow-0
				sm:flex-grow
			`}
		}

		& ${OwnerSearch as any}, & ${SkillSearch as any} {
			${tw`
				opacity-0
				sm:opacity-100
			`}
		}
	}

	&:focus-within {
		& ${InputContainer as any} {
			${tw`
				border-gray-300
			`}
		}

		${SearchButton as any} {
			${tw`
				bg-white
				border-0
				border-l
				border-opacity-60
				rounded-l-none
				sm:bg-transparent
			`}
		}
	}
`;
