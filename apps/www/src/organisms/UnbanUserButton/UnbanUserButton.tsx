import { AlertDialog, Button, ButtonProps, toast } from "@makepurple/components";
import { oneLine } from "common-tags";
import React, { FC } from "react";
import { useUnbanUserMutation } from "../../graphql";

export type UnbanUserButtonProps = ButtonProps & {
	userName: string;
};

export const UnbanUserButton: FC<UnbanUserButtonProps> = ({
	userName,
	disabled,
	...buttonProps
}) => {
	const [{ fetching }, unbanUser] = useUnbanUserMutation();

	return (
		<AlertDialog
			description={oneLine`
				Please carefully review the reason for ${userName}'s ban before proceeding.
			`}
			onConfirm={async (e) => {
				e.stopPropagation();

				const didSucceed = await unbanUser({
					name: userName
				})
					.then((result) => !!result.data?.unbanUser.record)
					.catch(() => false);

				if (!didSucceed) {
					toast.error(`Could not unban ${userName}`);

					return;
				}

				toast.success(`${userName} was unbanned`);
			}}
			text={`Yes, unban ${userName}`}
		>
			<Button disabled={disabled || fetching} {...buttonProps} />
		</AlertDialog>
	);
};
