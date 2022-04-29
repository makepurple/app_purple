import { computedTypesResolver } from "@hookform/resolvers/computed-types";
import {
	Form,
	FormButton,
	FormGroup,
	FormHelperText,
	FormLabel,
	Spinner,
	TextArea,
	toast
} from "@makepurple/components";
import { Schema, string } from "computed-types";
import React, { CSSProperties, FC } from "react";
import { useForm } from "react-hook-form";
import tw from "twin.macro";
import { BanUserFormUserFragment, useBanUserMutation } from "../../graphql";

const Root = tw(Form)`
	flex
	flex-col
	items-stretch
	gap-4
`;

const Actions = tw.div`
	grid
	grid-template-columns[repeat(auto-fit, minmax(9rem, 1fr))]
	gap-4
`;

export interface BanUserFormProps {
	className?: string;
	onClose?: () => void;
	style?: CSSProperties;
	user: BanUserFormUserFragment;
}

const BanUserSchema = Schema({
	reason: string.min(1, "Required")
});

export const BanUserForm: FC<BanUserFormProps> = ({ className, onClose, style, user }) => {
	const {
		formState: { errors, isDirty, isValid },
		handleSubmit,
		register
	} = useForm({
		defaultValues: {
			reason: user.banReason?.reason ?? ""
		},
		mode: "onChange",
		resolver: computedTypesResolver(BanUserSchema)
	});

	const [{ fetching }, banUser] = useBanUserMutation();

	return (
		<Root
			className={className}
			disabled={fetching}
			onSubmit={handleSubmit(async (formData) => {
				const didSucceed = await banUser({
					name: user.name,
					reason: formData.reason
				})
					.then((result) => !!result.data?.banUser.record)
					.catch(() => false);

				if (!didSucceed) {
					toast.error(`Could not ban ${user.name}`);

					return;
				}

				toast.success(`${user.name} was banned`);
			})}
			style={style}
		>
			<FormGroup>
				<FormLabel>Reason</FormLabel>
				<TextArea
					placeholder={`${user.name} was banned because...`}
					{...register("reason")}
				/>
				<FormHelperText error={errors.reason?.message} />
			</FormGroup>
			<Actions>
				<FormButton disabled={!isDirty || !isValid} type="submit" variant="alert">
					<span>Ban User</span>
					{fetching && <Spinner tw="ml-2" />}
				</FormButton>
				<FormButton
					onClick={() => {
						onClose?.();
					}}
					type="button"
					variant="secondary"
				>
					Cancel
				</FormButton>
			</Actions>
		</Root>
	);
};
