import { Combobox } from "@headlessui/react";
import { Input, ListItem, Paper } from "@makepurple/components";
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

const StyledInput = tw(Input)`
	flex-grow
	self-stretch
	h-auto
	px-2
	rounded-r-none
	rounded-tl-md
	focus:ring-0
`;

const SelectorButton = tw.button`
	flex-shrink-0
	flex
	items-center
	justify-center
	h-8
	w-8
	rounded-r-lg
	cursor-pointer
	bg-brand
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
		max-h-56
		overflow-y-auto
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
				.filter((language) => language.toLowerCase().startsWith(query.toLowerCase())),
		[query]
	);

	return (
		<Combobox
			as={Fragment}
			disabled={disabled}
			onChange={(newLanguage) => {
				setQuery(newLanguage);
				onChange(newLanguage);
			}}
			value={value}
		>
			{({ open }) => (
				<>
					<Root ref={refRef}>
						<Combobox.Input
							as={StyledInput}
							className={className}
							autoComplete="off"
							disabled={disabled}
							displayValue={(language: CodeLanguage) => language}
							onChange={(e) => {
								setQuery(e.target.value);
							}}
							placeholder="Language"
							spellCheck={false}
							style={style}
							value={query}
						/>
						<Combobox.Button as={SelectorButton}>
							<SelectorIcon height={24} width={24} />
						</Combobox.Button>
					</Root>
					{open && !!filtered.length && (
						<Combobox.Options
							as={Languages}
							ref={popperRef}
							{...popper.attributes.popper}
							static
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
					)}
				</>
			)}
		</Combobox>
	);
};
