import { Button } from "@/client/atoms";
import { InferComponentProps } from "@/client/types";
import React, { FC, useContext } from "react";
import { SelectContext } from "./context";

export type SelectDisclosureProps = InferComponentProps<typeof Button>;

export const SelectDisclosure: FC<SelectDisclosureProps> = ({ as, size, ...buttonProps }) => {
	const select = useContext(SelectContext);

	return (
		<Button
			as={as}
			size={size}
			{...buttonProps}
			{...select?.getToggleButtonProps({ ...buttonProps })}
		/>
	);
};
