import { XIcon } from "@/client/svgs";
import { InferComponentProps } from "@/client/types";
import React, { useContext } from "react";
import { styled } from "twin.macro";
import { TagsContext } from "./context";

export type TagProps = Omit<InferComponentProps<typeof Root>, "children"> & {
	children: string;
};

export type TagType = "positive" | "neutral" | "negative";

export const Root = styled.span<{ type?: TagType }>`
	display: inline-flex;
	align-items: stretch;
	justify-content: center;
	box-sizing: border-box;
	height: 1.5em;
	margin: 0.25em;
	border-radius: 0.25em;
	background-color: ${({ theme, type }) => {
		switch (type) {
			case "positive":
				return theme.palette.blue;
			case "negative":
				return theme.palette.red;
			case "neutral":
				return theme.palette.grey;
			default:
				return "initial";
		}
	}};
	font-size: 1rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.contrastingPrimaryText};
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
