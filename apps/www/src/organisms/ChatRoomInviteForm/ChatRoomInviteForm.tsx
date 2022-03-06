import { computedTypesResolver } from "@hookform/resolvers/computed-types";
import { Form, FormButton, HiddenInput, Spinner, Tags } from "@makepurple/components";
import Schema, { array, string } from "computed-types";
import React, { CSSProperties, FC, SyntheticEvent } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import tw from "twin.macro";
import { ChatRoomInviteFormChatFragment, useInviteToChatMutation } from "../../graphql";
import { FriendAutosuggest } from "../FriendAutosuggest";

const Root = tw(Form)`
	flex
	flex-col
	items-stretch
`;

const Content = tw(Tags)`
	rounded-none
	border
	border-solid
	border-gray-300
`;

const StyledFriendAutoSuggest = tw(FriendAutosuggest)`
	w-48
`;

const Actions = tw.div`
	flex-shrink-0
	flex
	items-stretch
	justify-end
	gap-2
	flex-nowrap
	w-full
`;

const Action = tw(FormButton)`
	w-24
`;

export interface ChatRoomInviteFormProps {
	chat: ChatRoomInviteFormChatFragment;
	className?: string;
	onCancel?: (e?: SyntheticEvent) => void;
	onCompleted?: () => void;
	style?: CSSProperties;
}

export const ChatRoomInviteForm: FC<ChatRoomInviteFormProps> = ({
	chat,
	className,
	onCancel,
	onCompleted,
	style
}) => {
	const { control, handleSubmit, register } = useForm<{ users: readonly { name: string }[] }>({
		defaultValues: {
			users: []
		},
		resolver: computedTypesResolver(
			Schema({
				users: array
					.of(
						Schema({
							name: string
						})
					)
					.max(10 - chat.users.nodes.length, "Cannot add more than 10 users")
			})
		)
	});

	const users = useFieldArray({ control, keyName: "_id", name: "users" });

	const [{ fetching }, inviteToChat] = useInviteToChatMutation();

	return (
		<Root
			className={className}
			disabled={fetching}
			onSubmit={handleSubmit(async (formData) => {
				const didSucceed = await inviteToChat({
					where: { id: chat.id },
					data: { users: { name: { in: formData.users.map((user) => user.name) } } }
				})
					.then((result) => !!result.data?.inviteToChat)
					.catch(() => false);

				if (!didSucceed) {
					toast.error("Could not invite users to this chat");

					return;
				}

				onCompleted?.();
			})}
			style={style}
		>
			<Content editable="add-only" tw="rounded-none">
				{chat.users.nodes.map((user) => (
					<Tags.Tag key={user.id} id={user.id}>
						{user.name}
					</Tags.Tag>
				))}
				{users.fields.map((field, i) => (
					<Tags.Tag key={field._id} id={field._id} editable>
						<HiddenInput {...register(`users.${i}.name`)} />
						<span>{field.name}</span>
					</Tags.Tag>
				))}
				<StyledFriendAutoSuggest
					onSelect={(newInvitee) => {
						users.append({ name: newInvitee.name });
					}}
					placeholder="Invite members by name"
					aria-label="new invitee"
				/>
				<Actions tw="mt-2">
					<Action size="small" type="submit">
						<span>Save</span>
						{fetching && <Spinner tw="ml-2" />}
					</Action>
					<Action
						onClick={() => {
							onCancel?.();
						}}
						size="small"
						type="button"
						variant="secondary"
					>
						Cancel
					</Action>
				</Actions>
			</Content>
		</Root>
	);
};
