import { InferComponentProps } from "@makepurple/typings";
import { ObjectUtils } from "@makepurple/utils";
import React, {
	forwardRef,
	memo,
	ReactNode,
	SyntheticEvent,
	useCallback,
	useMemo,
	useState
} from "react";
import tw, { styled, theme } from "twin.macro";
import { TagsContext } from "./context";
import { Tag, TagProps, TagType } from "./Tag";
import { TagEditable } from "./TagEditable";

export type { TagProps, TagType } from "./Tag";

export type TagsProps = Omit<InferComponentProps<typeof Root>, "children" | "onChange"> & {
	children: ReactNode[];
	editable?: boolean | "add-only" | "remove-only";
	onChange?: (newTags: readonly TagProps[], event?: SyntheticEvent) => void;
};

const Root = styled.div<{ editable?: boolean | "add-only" | "remove-only"; type?: TagType }>`
	${tw`
		relative
		flex
		flex-row
		flex-wrap
		gap-1.5
		text-base
		font-medium
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
	}
`;

const _Tags = memo(
	forwardRef<HTMLDivElement, TagsProps>((props, ref) => {
		const {
			children = [],
			editable = false,
			onChange,
			onClick,
			type = "neutral",
			...restTagsProps
		} = props;

		const [editableElem, editableRef] = useState<HTMLInputElement | null>(null);

		const tags: readonly TagProps[] = useMemo(() => {
			return children
				.filter((child) => (child as any).type === Tag)
				.map((child) => (child as any).props as TagProps);
		}, [children]);

		const onRemove = useCallback(
			(toRemove: TagProps, event?: SyntheticEvent) => {
				const newTags: readonly TagProps[] = tags.filter((tag) => tag.id !== toRemove.id);

				onChange?.(newTags, event);
			},
			[onChange, tags]
		);

		return (
			<Root
				{...restTagsProps}
				ref={ref}
				editable={editable}
				onClick={(e) => {
					onClick?.(e);

					if (!editableElem) return;

					editableElem.focus();
				}}
				type={type}
			>
				<TagsContext.Provider value={{ editable, editableRef, onRemove }}>
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
