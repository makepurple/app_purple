import { InferComponentProps } from "@/client/types";
import React, { forwardRef, useCallback } from "react";
import { Editor, Transforms } from "slate";
import { useSlateStatic } from "slate-react";
import styled, { css } from "styled-components";

const Root = styled.button<{ $active: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding: 0 0.875rem;
	border: 1px solid ${({ theme }) => theme.palette.lightGrey};
	font-size: inherit;
	color: ${({ theme }) => theme.colors.primaryText};
	background-color: transparent;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.palette.purple};
		color: ${({ theme }) => theme.colors.contrastingPrimaryText};
	}

	${({ $active }) =>
		$active &&
		css`
			background-color: ${({ theme }) => theme.palette.purple};
			color: ${({ theme }) => theme.colors.contrastingPrimaryText};
		`}
`;

export type MarkButtonProps = InferComponentProps<"button"> & {
	format: string;
};

export const MarkButton = forwardRef<HTMLButtonElement, MarkButtonProps>((props, ref) => {
	const { format, children, onClick, ...restButtonProps } = props;

	const editor = useSlateStatic();

	const isActive = useCallback(() => {
		return editor.marks?.[format] === true;
	}, [editor, format]);

	const toggleMark = useCallback(() => {
		isActive() ? editor.removeMark(format) : editor.addMark(format, true);
	}, [editor, format, isActive]);

	return (
		<Root
			type="button"
			{...restButtonProps}
			ref={ref}
			onClick={(event) => {
				onClick?.(event);

				Transforms.setNodes(
					editor,
					{ type: "code" },
					{ match: (n) => Editor.isBlock(editor, n) }
				);
			}}
			$active={isActive()}
		>
			{children}
		</Root>
	);
});

MarkButton.displayName = "MarkButton";
