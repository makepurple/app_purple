import { ImageIcon } from "@/client/svgs";
import composeRefs from "@seznam/compose-react-refs";
import React, { CSSProperties, forwardRef, useState } from "react";
import Dropzone from "react-dropzone";
import { Control, Controller } from "react-hook-form";
import tw, { styled } from "twin.macro";

const Root = tw.div`
	flex
	items-stretch
	justify-center
	border
	border-solid
	border-gray-200
	cursor-pointer
`;

const DropInfo = styled.div<{ $hidden?: boolean }>`
	${tw`
		flex
		flex-col
		items-center
		justify-center
		h-32
		whitespace-pre
	`}

	${({ $hidden }) => $hidden && tw`hidden`}
`;

const ChooseAFile = tw.span`
	font-semibold
`;

const StyledImageIcon = tw(ImageIcon)`
	mb-3
`;

const PreviewContainer = tw.div`
	relative
	flex
	items-center
	justify-center
	w-full
`;

const Preview = tw.img`
	object-contain
	w-full
	h-auto
`;

export interface ImageInputProps {
	className?: string;
	control?: Control<any, any>;
	name: string;
	style?: CSSProperties;
}

export const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>((props, ref) => {
	const { className, control, name, style } = props;

	const [file, setFile] = useState<(File & { preview: string }) | null>(null);

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }: any) => {
				return (
					<Dropzone
						accept={["image/gif", "image/jpeg", "image/jpg", "image/png", "image/webp"]}
						multiple={false}
						onDrop={(acceptedFiles) => {
							const acceptedFile = acceptedFiles[0] ?? null;

							const previewFile = acceptedFile
								? Object.assign(acceptedFile, {
										preview: URL.createObjectURL(acceptedFile)
								  })
								: null;

							setFile(previewFile);

							field.onChange(acceptedFile);
						}}
					>
						{({ getRootProps, getInputProps }) => {
							const inputProps = getInputProps({
								name,
								onChange: (e) => {
									const acceptedFile = e.target.files?.[0] ?? null;

									field.onChange(acceptedFile);
								},
								refKey: "ref"
							});

							return (
								<Root {...getRootProps({ className, style })}>
									<input
										{...inputProps}
										ref={composeRefs(
											ref,
											inputProps[inputProps.refKey ?? "ref"]
										)}
									/>
									<DropInfo $hidden={!!file}>
										<StyledImageIcon height={64} width={64} />
										<span>
											<ChooseAFile>Choose a file</ChooseAFile> or drag it here
										</span>
									</DropInfo>
									{file && (
										<PreviewContainer>
											{/* eslint-disable-next-line @next/next/no-img-element */}
											<Preview alt="" src={file.preview} />
										</PreviewContainer>
									)}
								</Root>
							);
						}}
					</Dropzone>
				);
			}}
		/>
	);
});

ImageInput.displayName = "ImageInput";
