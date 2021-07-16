import { useOnClickOutside, useOnKeyDown, useUncontrolledProp } from "@/client/hooks";
import Tippy, { TippyProps } from "@tippyjs/react";
import React, {
	cloneElement,
	FC,
	MouseEvent,
	ReactNode,
	RefObject,
	SyntheticEvent,
	useRef
} from "react";
import styled from "styled-components";

export const PopoverArrow = styled.div`
	position: absolute;
	width: 16px;
	height: 16px;
	border-color: transparent;
	border-style: solid;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	&::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		color: ${({ theme }) => theme.colors.surfaceColor};
		border-color: transparent;
		border-style: solid;
		border-width: 8px;
		transform: translate(-50%, -50%);
	}
`;

export const PopoverBox = styled.div`
	background-color: ${({ theme }) => theme.colors.surfaceColor};
	border-radius: 4px;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
	pointer-events: auto;

	&[data-placement^="top"] > ${PopoverArrow} {
		bottom: 0;

		&::before {
			bottom: -7px;
			border-bottom-width: 0;
			border-top-color: initial;
		}
	}

	&[data-placement^="bottom"] > ${PopoverArrow} {
		top: 0;

		&::before {
			top: -7px;
			border-top-width: 0;
			border-bottom-color: initial;
		}
	}

	&[data-placement^="left"] > ${PopoverArrow} {
		right: 0;

		&::before {
			right: -7px;
			border-right-width: 0;
			border-left-color: initial;
		}
	}

	&[data-placement^="right"] > ${PopoverArrow} {
		left: 0;

		&::before {
			left: -7px;
			border-left-width: 0;
			border-right-color: initial;
		}
	}
`;

export type PopoverProps = Omit<TippyProps, "content" | "render" | "visible"> & {
	canEscapeKeyClose?: boolean;
	canOutsideClickClose?: boolean;
	content?: ReactNode;
	onClose?: (event?: SyntheticEvent) => void;
	open?: boolean;
	render?: FC<{ contentRef?: RefObject<HTMLDivElement> }>;
};

export const Popover: FC<PopoverProps> = (props) => {
	const {
		arrow = true,
		canEscapeKeyClose = true,
		canOutsideClickClose = true,
		children,
		content,
		onClose,
		open: _open,
		render: Content = ({ children: _children, contentRef, ...contentProps }) => (
			<PopoverBox {...contentProps} ref={contentRef}>
				{_children}
				{arrow && <PopoverArrow data-popper-arrow="" />}
			</PopoverBox>
		),
		...restProps
	} = props;

	const [open, setOpen] = useUncontrolledProp(_open, false);

	const contentRef = useRef<HTMLDivElement>(null);

	useOnKeyDown({ global: true, key: "CODE_ESCAPE" }, (event) => {
		if (!canEscapeKeyClose || !open) return;

		setOpen(false);
		onClose?.(event);
	});

	useOnClickOutside(contentRef, (event) => {
		if (!canOutsideClickClose || !open) return;

		setOpen(false);
		onClose?.(event as any);
	});

	return (
		<Tippy
			placement="auto"
			render={(attrs) =>
				open && (
					<Content {...attrs} contentRef={contentRef}>
						{content}
					</Content>
				)
			}
			{...restProps}
		>
			{children &&
				cloneElement(children, {
					onClick: (event: MouseEvent<any>) => {
						const lastOpen = open;

						/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */
						children.props.onClick?.(event);
						setOpen(!open);

						if (lastOpen) onClose?.(event);
					}
				})}
		</Tippy>
	);
};
