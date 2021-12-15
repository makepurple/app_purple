import { InferComponentProps } from "@makepurple/typings";
import React, { SyntheticEvent, useContext } from "react";
import tw, { styled, theme } from "twin.macro";
import { XIcon } from "../../svgs";
import { TagsContext } from "./context";

export type TagProps = Omit<InferComponentProps<typeof Root>, "id"> & {
	id: string;
	onRemove?: (tag: TagProps, event?: SyntheticEvent) => void;
};

export type TagType = "positive" | "neutral" | "negative";

export const Root = styled.span<{ type?: TagType }>`
	${tw`
		inline-flex
		items-stretch
		justify-center
		h-6
		rounded
		text-base
		font-medium
		text-white
	`}
	background-color: ${({ type }): any => {
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

const Text = tw.span`
	flex
	items-center
	px-3.5
	not-last:pr-0
	not-last:pl-1
`;

const CloseButton = tw.span`
	flex
	items-center
	justify-center
	h-6
	w-6
	cursor-pointer
`;

export const Tag = styled((props: TagProps) => {
	const { children, id, onRemove, ...restTagProps } = props;

	const context = useContext(TagsContext);

	return (
		<Root {...restTagProps}>
			<Text>{children}</Text>
			{context.editable && (
				<CloseButton
					onClick={(event) => {
						context.onRemove?.(props, event);
						onRemove?.(props, event);
					}}
				>
					<XIcon width={16} height={16} />
				</CloseButton>
			)}
		</Root>
	);
})<TagProps>``;

Tag.displayName = "Tag";
