import { Combobox } from "@headlessui/react";
import { Input, ListItem, Paper } from "@makepurple/components";
import React, { CSSProperties, FC, Fragment, useMemo, useState } from "react";
import tw from "twin.macro";
import { CodeLanguage } from "../../graphql";

const Root = tw.div`
	relative
`;

const Languages = tw(Paper)`
	absolute
	inset-x-0
	bottom-0
	translate-y-full
	flex
	flex-col
	items-stretch
	gap-0.5
	p-0.5
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

	const filtered = useMemo(
		() =>
			Object.values(CodeLanguage)
				.sort((a, b) => a.localeCompare(b))
				.filter((language) => language.startsWith(query)),
		[query]
	);

	return (
		<Combobox
			as={Root}
			className={className}
			disabled={disabled}
			onChange={(newLanguage) => {
				onChange(newLanguage);
			}}
			style={style}
			value={value}
		>
			<Combobox.Input
				as={Input}
				disabled={disabled}
				displayValue={(language: CodeLanguage) => language}
				onChange={(e) => {
					setQuery(e.target.value);
				}}
				spellCheck={false}
				value={query}
			/>
			<Combobox.Options as={Languages}>
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
