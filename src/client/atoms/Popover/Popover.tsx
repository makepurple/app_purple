import { LazyTippy, LazyTippyProps } from "@/client/atoms/LazyTippy";
import { useOnClickOutside, useOnKeyDown, useUncontrolledProp } from "@/client/hooks";
import React, {
	cloneElement,
	FC,
	MouseEvent,
	ReactNode,
	RefObject,
	SyntheticEvent,
	useRef
} from "react";
import tw, { styled } from "twin.macro";

export const PopoverArrow = styled.div`
	${tw`
		absolute
		w-4
		h-4
		border-transparent
		border-solid
		top-1/2
		left-1/2
		transform
		-translate-x-1/2
		-translate-y-1/2
	`}

	&::before {
		content: "";
		${tw`
			absolute
			top-1/2
			left-1/2
			text-white
			border-transparent
			border-solid
			border-8
			transform
			-translate-x-1/2
			-translate-y-1/2
		`}
	}
`;

export const PopoverBox = styled.div`
	${tw`
		bg-white
		rounded
		shadow-md
		pointer-events-auto
	`}

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

export type PopoverProps = Omit<LazyTippyProps, "content" | "render" | "visible"> & {
	canEscapeKeyClose?: boolean;
	canOutsideClickClose?: boolean;
	content?: ReactNode;
	onClose?: (event?: SyntheticEvent) => void;
	open?: boolean;
	render?: FC<{ className?: string; contentRef?: RefObject<HTMLDivElement> }>;
};

export const Popover: FC<PopoverProps> = (props) => {
	const {
		arrow = true,
		canEscapeKeyClose = true,
		canOutsideClickClose = true,
		children,
		className,
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
	const childRef = useRef<HTMLElement>(null);

	useOnKeyDown({ global: true, key: "CODE_ESCAPE" }, (event) => {
		if (!canEscapeKeyClose || !open) return;

		setOpen(false);
		onClose?.(event);
	});

	useOnClickOutside(contentRef, (event) => {
		if (!canOutsideClickClose || !open) return;

		const childElem = childRef.current;
		const didClickIn = !childElem || childElem.contains(event.target as Node | null);

		if (didClickIn) return;

		setOpen(false);
		onClose?.(event as any);
	});

	return (
		<LazyTippy
			placement="auto"
			render={(attrs) =>
				open && (
					<Content {...attrs} className={className} contentRef={contentRef}>
						{content}
					</Content>
				)
			}
			{...restProps}
		>
			{children &&
				cloneElement(children, {
					ref: childRef,
					onClick: (event: MouseEvent<any>) => {
						children.props.onClick?.(event);
						setOpen(!open);
					}
				})}
		</LazyTippy>
	);
};
