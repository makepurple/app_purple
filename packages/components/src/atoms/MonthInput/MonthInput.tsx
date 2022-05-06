import { useNoSsr } from "@makepurple/hooks";
import { InferComponentProps } from "@makepurple/typings";
import { dayjs, LangUtils } from "@makepurple/utils";
import { detect } from "detect-browser";
import React, {
	forwardRef,
	SyntheticEvent,
	useCallback,
	useEffect,
	useMemo,
	useState
} from "react";
import { Input } from "../Input";

export type MonthInputProps = Omit<InferComponentProps<typeof Input>, "onChange" | "value"> & {
	onChange?: (newValue: Date, event?: SyntheticEvent<HTMLInputElement>) => void;
	value?: Date;
};

export const MonthInput = forwardRef<HTMLInputElement, MonthInputProps>((props, ref) => {
	const { onChange: _onChange, type: _type = "month", value: _value, ...inputProps } = props;

	const [supported, setSupported] = useState<boolean | null>(null);

	const noSsr = useNoSsr();

	const type = useMemo(() => (supported ? "month" : "date") ?? _type, [_type, supported]);

	const value = useMemo(() => {
		return supported ? dayjs(_value).format("YYYY-MM") : dayjs(_value).format("YYYY-MM-DD");
	}, [_value, supported]);

	const getDate = useCallback((inputValue: string): Date => {
		const [year = 0, month = 0, date = 0] = inputValue.split("-").map((part) => {
			const intPart = parseInt(part, 10);

			return Number.isNaN(intPart) ? 0 : intPart;
		});

		return dayjs().year(year).month(month).date(date).toDate();
	}, []);

	useEffect(() => {
		if (typeof supported === "boolean") return;

		const browser = detect();

		if (!browser) return;

		switch (browser.name) {
			case "android":
			case "chrome":
			case "chromium-webview":
			case "edge":
			case "edge-chromium":
			case "edge-ios":
			case "ios":
			case "opera":
			case "samsung":
				setSupported(true);

				break;
			default:
				setSupported(false);
		}
	}, [supported]);

	const getFallback = () => (
		<Input {...inputProps} ref={ref} disabled={true} type="date" value={value} />
	);

	if (LangUtils.isNil(supported)) return getFallback();

	return noSsr(
		<Input
			{...inputProps}
			ref={ref}
			type={type}
			onChange={(e) => {
				_onChange?.(getDate(e.target.value), e);
			}}
			value={value}
		/>,
		getFallback()
	);
});

MonthInput.displayName = "MonthInput";
