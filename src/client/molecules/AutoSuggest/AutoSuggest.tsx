import { Input, InputProps, Menu, Popover, PopoverModifiers } from "@/client/atoms";
import { useToggle, useUncontrolledProp } from "@/client/hooks";
import { StringUtils } from "@/utils";
import Fuse from "fuse.js";
import React, { forwardRef, SyntheticEvent, useMemo } from "react";
import { styled } from "twin.macro";

const MatchToken = styled.span<{ $match: boolean }>`
	box-sizing: border-box;
	border-radius: 4px;
	padding: 0 ${({ $match }) => ($match ? 0.125 : 0)}rem;
	color: ${({ theme, $match }) => ($match ? theme.palette.white : theme.colors.primaryText)};
	background-color: ${({ theme, $match }) => ($match ? theme.palette.purple : "transparent")};
	white-space: pre;
`;

export interface AutoSuggestProps extends InputProps {
	items?: readonly string[];
	onValueChange?: (value: string, event?: SyntheticEvent) => void;
}

export const AutoSuggest = forwardRef<HTMLInputElement, AutoSuggestProps>((props, ref) => {
	const {
		items = [],
		onChange,
		onClick,
		onValueChange,
		value: _value,
		...restInputProps
	} = props;

	const [value, setValue] = useUncontrolledProp(_value?.toString(), "");

	const fuse = useMemo(() => new Fuse(items, { includeMatches: true }), [items]);
	const filteredItems = useMemo(() => fuse.search(value), [fuse, value]);

	const [open, toggle] = useToggle(false);

	return (
		<Popover
			content={
				!!filteredItems?.length && (
					<Menu>
						{filteredItems.map(({ item, matches = [] }) => {
							const partitions = StringUtils.partition(item, matches[0]?.indices);

							return (
								<Menu.Item
									key={item}
									onClick={(event) => {
										onValueChange?.(item, event);
										setValue(item);
										toggle.off();
									}}
								>
									{partitions.map((partition, i) => (
										<MatchToken key={i} $match={partition.match}>
											{partition.value}
										</MatchToken>
									))}
								</Menu.Item>
							);
						})}
					</Menu>
				)
			}
			onClose={toggle.off}
			open={open}
			placement="bottom"
			popperOptions={{
				modifiers: [PopoverModifiers.SameWidth]
			}}
		>
			<Input
				ref={ref}
				onClick={(event) => {
					onClick?.(event);
					toggle.toggle();
				}}
				onChange={(event) => {
					onChange?.(event);
					onValueChange?.(event.target.value, event);
					setValue(event.target.value);
				}}
				value={value}
				{...restInputProps}
			/>
		</Popover>
	);
});

AutoSuggest.displayName = "AutoSuggest";
