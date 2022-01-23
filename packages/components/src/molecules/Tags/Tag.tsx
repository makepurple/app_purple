import { InferComponentProps } from "@makepurple/typings";
import React, { SyntheticEvent, useContext } from "react";
import tw, { styled, theme } from "twin.macro";
import { XIcon } from "../../svgs";
import { TagsContext } from "./context";

export type TagProps = Omit<InferComponentProps<typeof Root>, "id"> & {
	editable?: boolean;
	id: string;
	onRemove?: (tag: TagProps, event?: SyntheticEvent) => void;
};

export type TagType = "positive" | "neutral" | "negative";

export const Root = styled.span<{
	type?: TagType;
	$canDelete?: boolean;
}>`
	${tw`
		inline-flex
		items-stretch
		justify-center
		h-6
		px-3.5
		rounded
		font-size[inherit]
		line-height[inherit]
		font-weight[inherit]
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
	${({ $canDelete }) =>
		$canDelete &&
		tw`
			pl-1
			pr-0
		`}
`;

const Text = tw.span`
	flex
	items-center
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
	const { children, editable, id, onRemove, ...restTagProps } = props;

	const context = useContext(TagsContext);

	const canDelete = editable ?? (context.editable === true || context.editable === "remove-only");

	return (
		<Root {...restTagProps} $canDelete={canDelete}>
			<Text>{children}</Text>
			{canDelete && (
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
