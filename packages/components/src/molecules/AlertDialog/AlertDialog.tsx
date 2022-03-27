import { useUncontrolledProp } from "@makepurple/hooks";
import { StyleUtils } from "@makepurple/utils";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import React, { CSSProperties, FC, MouseEvent, ReactElement, ReactNode } from "react";
import tw, { styled } from "twin.macro";
import { Backdrop, Button, Paper } from "../../atoms";

const StyledBackdrop = styled(Backdrop)`
	z-index: ${StyleUtils.getZIndex("dialog-backdrop")};
`;

const Root = styled(Paper)`
	${tw`
		fixed
		top-1/2
		left-1/2
		-translate-x-1/2
		-translate-y-1/2
		flex
		flex-col
		width[28rem]
		max-width[calc(100% - 0.5rem)]
		p-4
		shadow-2xl
		sm:p-6
	`}
	z-index: ${StyleUtils.getZIndex("dialog")};
`;

const Title = tw(RadixAlertDialog.Title)`
	text-lg
	leading-none
	font-semibold
	text-left
`;

const Description = tw(RadixAlertDialog.Description)`
	text-sm
	text-gray-500
`;

const Actions = tw.div`
	flex
	items-stretch
	justify-end
	gap-2
`;

export interface AlertDialogProps {
	children?: ReactElement;
	className?: string;
	description: string;
	onClose?: () => void;
	onConfirm?: (event: MouseEvent<HTMLButtonElement>) => void;
	open?: boolean;
	style?: CSSProperties;
	text: ReactNode;
	title?: string;
}

export const AlertDialog: FC<AlertDialogProps> = ({
	children,
	className,
	description,
	onClose,
	onConfirm,
	open: _open,
	style,
	text,
	title = "Are you absolutely sure?"
}) => {
	const [open, setOpen] = useUncontrolledProp<boolean>(_open, false);

	return (
		<RadixAlertDialog.Root
			open={open}
			onOpenChange={(newOpen) => {
				setOpen(newOpen);

				!newOpen && onClose?.();
			}}
		>
			{!!children && <RadixAlertDialog.Trigger asChild>{children}</RadixAlertDialog.Trigger>}
			<RadixAlertDialog.Portal>
				<RadixAlertDialog.Overlay asChild>
					<StyledBackdrop
						onClick={(e) => {
							e.stopPropagation();
						}}
						open={open}
					/>
				</RadixAlertDialog.Overlay>
				<RadixAlertDialog.Content asChild>
					<Root
						className={className}
						onClick={(e) => {
							e.stopPropagation();
						}}
						style={style}
					>
						<Title>{title}</Title>
						<Description tw="mt-3">{description}</Description>
						<Actions tw="mt-4">
							<Button
								as={RadixAlertDialog.Cancel}
								size="small"
								type="button"
								variant="secondary"
							>
								Cancel
							</Button>
							<Button
								as={RadixAlertDialog.Action}
								onClick={onConfirm}
								size="small"
								type="button"
								variant="error"
							>
								{text}
							</Button>
						</Actions>
					</Root>
				</RadixAlertDialog.Content>
			</RadixAlertDialog.Portal>
		</RadixAlertDialog.Root>
	);
};
