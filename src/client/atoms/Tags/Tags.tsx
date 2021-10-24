import { InferComponentProps } from "@/client/types";
import { ObjectUtils } from "@/utils";
import React, {
	forwardRef,
	isValidElement,
	memo,
	ReactElement,
	SyntheticEvent,
	useCallback,
	useMemo
} from "react";
import tw, { styled, theme } from "twin.macro";
import { TagsContext } from "./context";
import { Tag, TagProps, TagType } from "./Tag";

export type TagsProps = Omit<InferComponentProps<typeof Root>, "children" | "onChange"> & {
	children: ReactElement<TagProps, typeof Tag>[];
	editable?: boolean;
	onChange?: (newTags: readonly string[], event?: SyntheticEvent) => void;
};

const Root = styled.div<{ type?: TagType }>`
	${tw`
		flex
		flex-row
		flex-wrap
		-m-1
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

		const tags: readonly string[] = useMemo(() => {
			return children.map((child) => {
				if (!isValidElement(child)) throw new Error("Child is not a valid element!");
				if (child.type !== Tag) throw new Error("Child is not a Tag!");

				return child.props.children;
			});
		}, [children]);

		const onRemove = useCallback(
			(tagName: string, event?: SyntheticEvent) => {
				const newTags: readonly string[] = tags.filter((tag) => tag !== tagName);

				onChange?.(newTags, event);
			},
			[onChange, tags]
		);

		return (
			<Root {...restTagsProps} ref={ref} type={type}>
				<TagsContext.Provider value={{ editable, onRemove }}>
					{children}
				</TagsContext.Provider>
			</Root>
		);
	})
);

_Tags.displayName = "Tags";

export const Tags = ObjectUtils.setStatic(_Tags, { Tag });
