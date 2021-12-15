import type { InferComponentProps } from "@makepurple/typings";
import React, { forwardRef } from "react";

export type HiddenInputProps = InferComponentProps<"input">;

export const HiddenInput = forwardRef<HTMLInputElement, HiddenInputProps>((props, ref) => {
	return <input type="hidden" {...props} ref={ref} />;
});

HiddenInput.displayName = "HiddenInput";
