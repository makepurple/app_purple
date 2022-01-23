import { computedTypesResolver } from "@hookform/resolvers/computed-types";
import {
	DocumentEditor,
	Form,
	FormButton,
	FormGroup,
	HiddenInput,
	Tags
} from "@makepurple/components";
import { ChatMessageContent } from "@makepurple/validators";
import Schema, { array, string, Type } from "computed-types";
import { useRouter } from "next/router";
import React, { CSSProperties, FC, useEffect, useMemo } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import tw from "twin.macro";
import { useCreateChatMutation } from "../../graphql";
import { FriendAutosuggest } from "../FriendAutosuggest";

const Root = tw(Form)`
	flex
	flex-col
	items-stretch
`;

const Invitees = tw(Tags)`
	border-gray-300
`;

const ChatterArea = tw.div`
	flex-grow
`;

const SendButtonContainer = tw.div`
	grid-column-start[-4]
	grid-column-end[-1]
	flex
	items-stretch
	justify-center
`;

const MessageInput = tw(DocumentEditor)`
	border-gray-300
`;

export interface CreateChatFormProps {
	className?: string;
	style?: CSSProperties;
}

export const CreateChatForm: FC<CreateChatFormProps> = ({ className, style }) => {
	const [{ fetching }, createChat] = useCreateChatMutation();

	const router = useRouter();

	const {
		control,
		formState: { errors, isSubmitted, isValid },
		handleSubmit,
		register,
		reset,
		watch
	} = useForm<{
		message: Type<typeof ChatMessageContent>;
		invitees: readonly { name: string }[];
	}>({
		defaultValues: {
			message: [{ type: "paragraph", children: [{ text: "" }] }],
			invitees: []
		},
		resolver: computedTypesResolver(
			Schema({
				message: ChatMessageContent.error("Message malformed"),
				invitees: array
					.of(
						Schema({
							name: string
						})
					)
					.min(1, "At least 1 user required")
					.max(10, "Up to 10 users allowed at once")
			})
		)
	});

	const formMessage = watch("message");

	const isMessageValid = useMemo((): boolean => {
		const validator = ChatMessageContent.destruct();

		const [, validated] = validator(formMessage);

		return !!validated;
	}, [formMessage]);

	const invitees = useFieldArray({
		control,
		keyName: "_id",
		name: "invitees"
	});

	useEffect(() => {
		if (!isSubmitted) return;
		if (isValid) return;

		if (errors.invitees) {
			toast.error((errors.invitees as any)?.message);
		} else if (errors.message) {
			toast.error("Message is malformed");
		}

		reset(
			{
				message: [{ type: "paragraph", children: [{ text: "" }] }],
				invitees: []
			},
			{ keepValues: true }
		);
	}, [errors, isSubmitted, isValid, reset]);

	return (
		<Root
			className={className}
			disabled={fetching}
			onSubmit={handleSubmit(async (formData) => {
				const newChat = await createChat({
					data: {
						message: formData.message,
						users: {
							name: {
								in: formData.invitees.map((invitee) => invitee.name)
							}
						}
					}
				})
					.then((result) => result.data?.createChat.record)
					.catch(() => null);

				if (!newChat) {
					toast.error("Message could not be sent");

					return;
				}

				await router.push("/messaging/[chatId]", `/messaging/${newChat.id}`);
			})}
			style={style}
		>
			<FormGroup>
				<Invitees editable type="neutral" tw="relative rounded-none">
					{invitees.fields.map((field, i) => (
						<Tags.Tag
							key={field._id}
							id={field._id}
							onRemove={() => invitees.remove(i)}
						>
							<HiddenInput {...register(`invitees.${i}.name`)} />
							<span>{field.name}</span>
						</Tags.Tag>
					))}
					<FriendAutosuggest
						onSelect={(newFriend) => {
							invitees.append({ name: newFriend.name });
						}}
						placeholder="Invite members by name"
						aria-label="new invitee"
						tw="w-52"
					/>
				</Invitees>
			</FormGroup>
			<ChatterArea />
			<FormGroup>
				<Controller
					control={control}
					name="message"
					render={({ field }) => (
						<MessageInput
							onChange={(newMessage) => {
								field.onChange(newMessage);
							}}
							value={field.value}
							tw="rounded-t-none"
						>
							<DocumentEditor.Editable
								name={field.name}
								placeholder="Write a message"
								aria-label="new message"
								tw="rounded-t-none"
							/>
							<DocumentEditor.Toolbar>
								<DocumentEditor.Toolbar.CodeBlock />
								<DocumentEditor.Toolbar.Bold />
								<DocumentEditor.Toolbar.Italic />
								<DocumentEditor.Toolbar.Underline />
								<DocumentEditor.Toolbar.BulletedList />
								<DocumentEditor.Toolbar.NumbedList />
								<DocumentEditor.Toolbar.BlockQuote />
								<DocumentEditor.Toolbar.Code />
								<DocumentEditor.Toolbar.Link />
								<SendButtonContainer>
									<FormButton
										disabled={!isMessageValid}
										size="small"
										type="submit"
										tw="flex-grow"
									>
										Send
									</FormButton>
								</SendButtonContainer>
							</DocumentEditor.Toolbar>
						</MessageInput>
					)}
				/>
			</FormGroup>
		</Root>
	);
};
