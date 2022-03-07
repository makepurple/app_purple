import { FormButton, FormButtonProps, toast } from "@makepurple/components";
import React, { FC } from "react";
import tw from "twin.macro";
import { useRemovePostThumbnailMutation } from "../../graphql";

const Root = tw(FormButton)`
	bg-pink-600
`;

export type RemovePostThumbnailButtonProps = FormButtonProps & {
	postId: string;
};

export const RemovePostThumbnailButton: FC<RemovePostThumbnailButtonProps> = (props) => {
	const { children = "Remove", disabled, onClick, postId, ...buttonProps } = props;

	const [{ fetching }, removePostThumbnail] = useRemovePostThumbnailMutation();

	return (
		<Root
			type="button"
			{...buttonProps}
			disabled={disabled || fetching}
			onClick={async (e) => {
				onClick?.(e);

				const didSucceed = await removePostThumbnail({ where: { id: postId } })
					.then((result) => !!result.data?.removePostThumbnail.record)
					.catch(() => false);

				didSucceed
					? toast.success("Cover image has been removed")
					: toast.error("Cover image could not be removed");
			}}
		>
			{children}
		</Root>
	);
};
