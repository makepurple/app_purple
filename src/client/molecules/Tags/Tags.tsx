import { InferComponentProps } from "@/client/types";
import { ObjectUtils } from "@/utils";
import React, { forwardRef, memo, ReactElement, SyntheticEvent, useCallback, useMemo } from "react";
import tw, { styled, theme } from "twin.macro";
import { TagsContext } from "./context";
import { Tag, TagProps, TagType } from "./Tag";
import { TagEditable, TagEditableProps } from "./TagEditable";

export type { TagProps, TagType } from "./Tag";

export type TagsProps = Omit<InferComponentProps<typeof Root>, "children" | "onChange"> & {
	children: (
		| ReactElement<TagProps, typeof Tag>
		| ReactElement<TagEditableProps, typeof TagEditable>
	)[];
	editable?: boolean;
	onChange?: (newTags: readonly TagProps[], event?: SyntheticEvent) => void;
};

const Root = styled.div<{ editable?: boolean; type?: TagType }>`
	${tw`
		flex
		flex-row
		flex-wrap
		gap-1.5
	`}

	${({ editable }) =>
		editable &&
		tw`
			p-2
			border
			border-solid
			border-gray-400
			rounded-lg
			shadow-inner
			bg-indigo-50
			ring-indigo-500
			ring-opacity-80
			transition
			duration-300
			ease-in-out
			focus-within:ring-2
			focus-within:bg-white
		`}

	& ${Tag} {
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
	}
`;

const _Tags = memo(
	forwardRef<HTMLDivElement, TagsProps>((props, ref) => {
		const {
			children = [],
			editable = false,
			onChange,
			type = "neutral",
			...restTagsProps
		} = props;

		const tags: readonly TagProps[] = useMemo(() => {
			return children
				.filter((child) => child.type === Tag)
				.map((child) => child.props as TagProps);
		}, [children]);

		const onRemove = useCallback(
			(toRemove: TagProps, event?: SyntheticEvent) => {
				const newTags: readonly TagProps[] = tags.filter((tag) => tag.id !== toRemove.id);

				onChange?.(newTags, event);
			},
			[onChange, tags]
		);

		return (
			<Root {...restTagsProps} ref={ref} editable={editable} type={type}>
				<TagsContext.Provider value={{ editable, onRemove }}>
					{children}
				</TagsContext.Provider>
			</Root>
		);
	})
);

_Tags.displayName = "Tags";

export const Tags = ObjectUtils.setStatic(_Tags, {
	Editable: TagEditable,
	Tag
});
