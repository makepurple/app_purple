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
import styled from "styled-components";
import { TagsContext } from "./context";
import { Tag, TagProps, TagType } from "./Tag";

export type TagsProps = Omit<InferComponentProps<typeof Root>, "children" | "onChange"> & {
	children: ReactElement<TagProps, typeof Tag>[];
	editable?: boolean;
	onChange?: (newTags: readonly string[], event?: SyntheticEvent) => void;
};

const Root = styled.div<{ type: TagType }>`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: -0.25rem;

	& ${Tag} {
		background-color: ${({ theme, type }) => {
			switch (type) {
				case "positive":
					return theme.palette.blue;
				case "negative":
					return theme.palette.red;
				case "neutral":
				default:
					return theme.palette.grey;
			}
		}};
	}
`;

const _Tags = memo(
	forwardRef<HTMLDivElement, TagsProps>((props, ref) => {
		const { children, editable = false, onChange, ...restTagsProps } = props;

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
			<Root {...restTagsProps} ref={ref}>
				<TagsContext.Provider value={{ editable, onRemove }}>
					{children}
				</TagsContext.Provider>
			</Root>
		);
	})
);

_Tags.displayName = "Tags";

export const Tags = ObjectUtils.setStatic(_Tags, { Tag });
