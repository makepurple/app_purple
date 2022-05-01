import { computedTypesResolver } from "@hookform/resolvers/computed-types";
import {
	DocumentEditor,
	DocumentEditorControlsRef,
	Form,
	FormButton,
	FormGroup,
	FormHelperText,
	Spinner,
	toast
} from "@makepurple/components";
import { CommentUpdateInput } from "@makepurple/validators";
import { Type } from "computed-types";
import { useSession } from "next-auth/react";
import React, { CSSProperties, FC, SyntheticEvent, useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import tw from "twin.macro";
import { CommentCardCommentFragment, useUpdateCommentMutation } from "../../graphql";

const ActionsContainer = tw.div`
	grid
	grid-template-columns[repeat(auto-fill, minmax(6rem, 1fr))]
	gap-4
`;

export interface UpdateCommentFormProps {
	className?: string;
	comment: CommentCardCommentFragment;
	onCancel?: (event?: SyntheticEvent) => void;
	onSuccess?: () => void;
	style?: CSSProperties;
}

export const UpdateCommentForm: FC<UpdateCommentFormProps> = ({
	className,
	comment,
	onCancel,
	onSuccess,
	style
}) => {
	const { data: sessionData } = useSession();

	const viewer = sessionData?.user;

	const [{ fetching: updating }, updateComment] = useUpdateCommentMutation();

	const {
		control,
		formState: { errors, isSubmitted, isValid },
		handleSubmit,
		reset,
		trigger
	} = useForm<Type<typeof CommentUpdateInput>>({
		defaultValues: {
			content: (comment.content as any) ?? [
				{
					type: "paragraph",
					children: [{ text: "" }]
				}
			]
		},
		mode: "all",
		resolver: computedTypesResolver(CommentUpdateInput)
	});

	const editor = useRef<DocumentEditorControlsRef>(null);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		trigger();
	}, [trigger]);

	if (!viewer) return null;

	return (
		<Form
			className={className}
			disabled={updating}
			onSubmit={handleSubmit(async (formData) => {
				const didSucceed = await updateComment({
					data: { content: formData.content },
					where: { id: comment.id }
				})
					.then((result) => !!result.data?.updateComment.record)
					.catch(() => false);

				if (!didSucceed) {
					toast.success("Comment could not be updated");

					return;
				}

				toast.success("Comment updated! 🎉");

				reset({
					content: (comment.content as any) ?? [
						{
							type: "paragraph",
							children: [{ text: "" }]
						}
					]
				});

				editor.current?.reset();

				onSuccess?.();
			})}
			style={style}
		>
			<FormGroup>
				<Controller
					control={control}
					name="content"
					render={({ field }) => (
						<DocumentEditor
							onChange={(newContent) => field.onChange(newContent)}
							value={field.value as any}
						>
							<DocumentEditor.Controls ref={editor} />
							<DocumentEditor.Editable
								name={field.name}
								placeholder="What are your thoughts?"
								aria-label="comment content"
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
							</DocumentEditor.Toolbar>
						</DocumentEditor>
					)}
				/>
				{isSubmitted && <FormHelperText error={(errors.content as any)?.message} />}
			</FormGroup>
			<ActionsContainer tw="mt-4">
				<FormButton disabled={!isValid} size="small" type="submit" variant="primary">
					<span>Save</span>
					{updating && <Spinner tw="ml-2" />}
				</FormButton>
				{!!onCancel && (
					<FormButton
						onClick={(e) => {
							onCancel?.(e);
						}}
						size="small"
						type="button"
						variant="alert"
					>
						Cancel
					</FormButton>
				)}
			</ActionsContainer>
		</Form>
	);
};
