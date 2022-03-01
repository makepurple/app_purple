import { Combobox } from "@headlessui/react";
import { ListItem, Paper } from "@makepurple/components";
import { PopoverModifiers } from "@makepurple/components/src/atoms/Popover/modifiers";
import { StyleUtils } from "@makepurple/utils";
import React, { CSSProperties, FC, Fragment, useMemo, useState } from "react";
import { usePopper } from "react-popper";
import tw, { styled } from "twin.macro";
import { CodeLanguage } from "../../graphql";
import { SelectorIcon } from "../../svgs";

const Root = tw.div`
	flex
	flex-row
	items-center
`;

const StyledInput = tw.input`
	flex-grow
	px-2
	rounded-r-none
	bg-indigo-500
	text-white
	font-medium
	focus:ring-0
`;

const SelectorButton = tw.button`
	flex-shrink-0
	flex
	items-center
	justify-center
	h-10
	w-10
	rounded-r-lg
	cursor-pointer
	bg-indigo-500
	text-white
	hover:bg-indigo-600
`;

const Languages = styled(Paper)`
	${tw`
		absolute
		inset-x-0
		bottom-0
		translate-y-full
		flex
		flex-col
		items-stretch
		gap-0.5
		p-0.5
	`}
	z-index: ${StyleUtils.getZIndex("menu")};
`;

export interface CodeLanguageSelectProps {
	className?: string;
	disabled?: boolean;
	onChange: (language: CodeLanguage) => void;
	style?: CSSProperties;
	value: CodeLanguage;
}

export const CodeLanguageSelect: FC<CodeLanguageSelectProps> = ({
	className,
	disabled,
	onChange,
	style,
	value
}) => {
	const [query, setQuery] = useState<string>("");

	const [refElem, refRef] = useState<HTMLDivElement | null>(null);
	const [popperElem, popperRef] = useState<HTMLDivElement | null>(null);

	const popper = usePopper(refElem, popperElem, {
		modifiers: [PopoverModifiers.SameWidth],
		placement: "bottom-start"
	});

	const filtered = useMemo(
		() =>
			Object.values(CodeLanguage)
				.sort((a, b) => a.localeCompare(b))
				.filter((language) => language.startsWith(query)),
		[query]
	);

	return (
		<Combobox
			as={Fragment}
			disabled={disabled}
			onChange={(newLanguage) => {
				onChange(newLanguage);
			}}
			value={value}
		>
			<Root ref={refRef}>
				<Combobox.Input
					as={StyledInput}
					className={className}
					disabled={disabled}
					displayValue={(language: CodeLanguage) => language}
					onChange={(e) => {
						setQuery(e.target.value);
					}}
					spellCheck={false}
					style={style}
					value={query}
				/>
				<Combobox.Button as={SelectorButton}>
					<SelectorIcon height={24} width={24} />
				</Combobox.Button>
			</Root>
			<Combobox.Options
				as={Languages}
				ref={popperRef}
				{...popper.attributes.popper}
				style={popper.styles.popper}
			>
				{filtered.map((language) => (
					<Combobox.Option
						as={Fragment}
						forwardedAs="div"
						key={language}
						value={language}
					>
						{(optionProps) => (
							<ListItem as="div" {...optionProps}>
								{language}
							</ListItem>
						)}
					</Combobox.Option>
				))}
			</Combobox.Options>
		</Combobox>
	);
};
