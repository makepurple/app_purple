import { computedTypesResolver } from "@hookform/resolvers/computed-types";
import {
	Anchor,
	DocumentEditor,
	Form,
	FormButton,
	FormGroup,
	FormHelperText,
	FormLabel,
	Spinner,
	toast
} from "@makepurple/components";
import { CommentCreateInput } from "@makepurple/validators";
import { Type } from "computed-types";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import React, { CSSProperties, FC, SyntheticEvent, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import tw from "twin.macro";
import { useCommentCodeExampleMutation, useCommentPostMutation } from "../../graphql";

const ActionsContainer = tw.div`
	grid
	grid-template-columns[repeat(auto-fill, minmax(6rem, 1fr))]
	gap-4
`;

export interface CreateCommentFormProps {
	className?: string;
	codeExampleId?: Maybe<string>;
	commentId?: string;
	onCancel?: (event?: SyntheticEvent) => void;
	onSuccess?: () => void;
	postId?: Maybe<string>;
	style?: CSSProperties;
}

export const CreateCommentForm: FC<CreateCommentFormProps> = ({
	className,
	codeExampleId,
	commentId,
	onCancel,
	onSuccess,
	postId,
	style
}) => {
	const { data: sessionData } = useSession();

	const viewer = sessionData?.user;

	const [{ fetching: commentingCode }, commentCode] = useCommentCodeExampleMutation();
	const [{ fetching: commentingPost }, commentPost] = useCommentPostMutation();

	const {
		control,
		formState: { errors, isSubmitted, isValid },
		handleSubmit,
		reset,
		trigger
	} = useForm<Type<typeof CommentCreateInput>>({
		defaultValues: {
			content: [
				{
					type: "paragraph",
					children: [{ text: "" }]
				}
			]
		},
		mode: "all",
		resolver: computedTypesResolver(CommentCreateInput)
	});

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		trigger();
	}, [trigger]);

	const commenting = commentingCode || commentingPost;

	if (!viewer) return null;
	if (!codeExampleId && !postId) return null;

	return (
		<Form
			className={className}
			disabled={commenting}
			onSubmit={handleSubmit(async (formData) => {
				const didSucceed = codeExampleId
					? await commentCode({
							data: {
								codeExample: { id: codeExampleId },
								content: formData.content,
								parent: { id: commentId }
							}
					  })
							.then((result) => !!result.data?.commentCodeExample.record)
							.catch(() => false)
					: await commentPost({
							data: {
								content: formData.content,
								parent: { id: commentId },
								post: { id: postId }
							}
					  })
							.then((result) => !!result.data?.commentPost.record)
							.catch(() => false);

				if (!didSucceed) {
					toast.success("Comment could not be posted");

					return;
				}

				toast.success("Comment posted! 🎉");

				reset({
					content: [
						{
							type: "paragraph",
							children: [{ text: "" }]
						}
					]
				});

				onSuccess?.();
			})}
			style={style}
		>
			<FormGroup>
				<FormLabel>
					Comment as{" "}
					<NextLink href="/[userName]" as={`/${viewer.name}`} passHref>
						<Anchor>{viewer.name}</Anchor>
					</NextLink>
				</FormLabel>
				<Controller
					control={control}
					name="content"
					render={({ field }) => (
						<DocumentEditor
							onChange={(newContent) => field.onChange(newContent)}
							value={field.value}
						>
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
					<span>Comment</span>
					{commenting && <Spinner tw="ml-2" />}
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
