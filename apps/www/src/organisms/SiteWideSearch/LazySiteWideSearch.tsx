import React, { CSSProperties, FC } from "react";
import { SearchIcon } from "../../svgs";
import {
	InputContainer,
	OwnerSearch,
	Root,
	SearchButton,
	SearchInputContainer,
	SkillSearch
} from "./parts";

export interface LazySiteWideSearchProps {
	className?: string;
	style?: CSSProperties;
}

export const LazySiteWideSearch: FC<LazySiteWideSearchProps> = ({ className, style }) => {
	return (
		<Root className={className} role="search" style={style}>
			<InputContainer>
				<SearchInputContainer>
					<OwnerSearch disabled placeholder="Organizations or users..." type="search" />
				</SearchInputContainer>
				<SearchInputContainer>
					<SkillSearch disabled placeholder="Repositories or skills..." type="search" />
				</SearchInputContainer>
				<SearchButton
					disabled
					type="button"
					variant="secondary"
					aria-label="site-wide search"
				>
					<SearchIcon height={24} width={24} />
				</SearchButton>
			</InputContainer>
		</Root>
	);
};
