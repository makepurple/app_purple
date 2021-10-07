import { XIcon } from "@/client/svgs";
import { InferComponentProps } from "@/client/types";
import React, { useContext } from "react";
import tw, { styled, theme } from "twin.macro";
import { TagsContext } from "./context";

export type TagProps = Omit<InferComponentProps<typeof Root>, "children"> & {
	children: string;
};

export type TagType = "positive" | "neutral" | "negative";

export const Root = styled.span<{ type?: TagType }>`
	${tw`
		inline-flex
		items-stretch
		justify-center
		h-6
		m-1
		rounded
		text-base
		font-medium
		text-white
	`}
	background-color: ${({ type }) => {
		switch (type) {
			case "positive":
				return theme`colors.blue.500`;
			case "negative":
				return theme`colors.pink.600`;
			case "neutral":
				return theme`colors.gray.800`;
			default:
				return "initial";
		}
	}};
`;

const Text = styled.span`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding: 0 0.5rem;

	&:not(:last-child) {
		padding-right: 0.125rem;
	}
`;

const CloseButton = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 1.5rem;
	width: 1.5rem;
	cursor: pointer;
`;

export const Tag = styled(({ children, ...restTagProps }: TagProps) => {
	const { editable, onRemove } = useContext(TagsContext);

	return (
		<Root {...restTagProps}>
			<Text>{children}</Text>
			{editable && (
				<CloseButton
					onClick={(event) => {
						onRemove?.(children, event);
					}}
				>
					<XIcon height={16} width={16} />
				</CloseButton>
			)}
		</Root>
	);
})<TagProps>``;

Tag.displayName = "Tag";
