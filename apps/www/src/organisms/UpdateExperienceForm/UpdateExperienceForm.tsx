import { computedTypesResolver } from "@hookform/resolvers/computed-types";
import {
	Checkbox,
	ControlGroup,
	ExpandIcon,
	Form,
	FormButton,
	FormGroup,
	FormHelperText,
	FormLabel,
	HiddenInput,
	Input,
	ListItem,
	Select,
	Spinner,
	XIcon
} from "@makepurple/components";
import { dayjs, LangUtils } from "@makepurple/utils";
import { ExperienceUpdateInput } from "@makepurple/validators";
import { Type } from "computed-types";
import React, { CSSProperties, FC, SyntheticEvent, useMemo, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import tw from "twin.macro";
import { OrganizationInput } from "..";
import {
	ExperienceType,
	UpdateExperienceFormExperienceFragment,
	useUpdateExperienceMutation
} from "../../graphql";

const DateSelectorContainer = tw.div`
	grid
	grid-template-columns[repeat(auto-fit, minmax(280px, 1fr))]
	gap-4
`;

const EndDateToggleContainer = tw.div`
	flex
`;

const ActionsContainer = tw.div`
	grid
	grid-template-columns[repeat(auto-fill, minmax(8rem, 1fr))]
	gap-4
`;

export interface UpdateExperienceFormProps {
	className?: string;
	experience: UpdateExperienceFormExperienceFragment;
	onClose?: (e?: SyntheticEvent) => void;
	style?: CSSProperties;
}

export const UpdateExperienceForm: FC<UpdateExperienceFormProps> = ({
	className,
	experience,
	onClose,
	style
}) => {
	const startDate = useMemo(() => dayjs(experience.startDate), [experience.startDate]);
	const endDate = useMemo(
		() => experience.endDate && dayjs(experience.endDate),
		[experience.endDate]
	);

	const [{ fetching }, updateExperience] = useUpdateExperienceMutation();

	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
		setValue
	} = useForm<Type<typeof ExperienceUpdateInput>>({
		defaultValues: {
			endDate: !endDate
				? false
				: {
						month: endDate.month(),
						year: endDate.year()
				  },
			highlights: experience.highlights.slice(),
			location: experience.location ?? "",
			organizationName: experience.organizationName,
			positionName: experience.positionName ?? "",
			startDate: {
				month: startDate.month(),
				year: startDate.year()
			}
		},
		resolver: computedTypesResolver(ExperienceUpdateInput)
	});

	const {
		fields: highlights,
		append,
		remove
	} = useFieldArray({
		control,
		name: "highlights"
	});

	const [currentlyWork, setCurrentlyWork] = useState<boolean>(false);

	return (
		<Form
			className={className}
			onSubmit={handleSubmit(async (formData) => {
				const formStartDate =
					formData.startDate instanceof Date
						? formData.startDate
						: dayjs("2000-01-01T00:00:00.000Z")
								.month(formData.startDate.month)
								.year(formData.startDate.year)
								.toDate();

				const formEndDate = !formData.endDate
					? null
					: formData.endDate instanceof Date
					? formData.endDate
					: dayjs("2000-01-01T00:00:00.000Z")
							.month(formData.endDate.month)
							.year(formData.endDate.year)
							.toDate();

				const didSucceed = await updateExperience({
					data: {
						endDate: formEndDate,
						highlights: formData.highlights.map(
							(highlight: string | { value: string }) =>
								typeof highlight === "string" ? highlight : highlight.value
						),
						location: formData.location,
						organizationName: formData.organizationName,
						positionName: formData.positionName,
						startDate: formStartDate,
						type: formData.type as Maybe<ExperienceType>
					},
					where: {
						id: experience.id
					}
				})
					.then((result) => !!result.data?.updateExperience)
					.catch(() => false);

				if (!didSucceed) {
					toast.error("Your experiences could not be saved");

					return;
				}

				toast.success("Your experiences were updated 🎉");

				onClose?.();
			})}
			style={style}
		>
			<FormGroup>
				<FormLabel>Title</FormLabel>
				<Input {...register("positionName")} placeholder="Title" aria-label="title" />
				<FormHelperText error={errors.positionName?.message} />
			</FormGroup>
			<FormGroup tw="mt-4">
				<FormLabel>Experience type</FormLabel>
				<Controller
					control={control}
					name="type"
					render={({ field }) => (
						<Select onChange={field.onChange} value={field.value as ExperienceType}>
							{({ open }) => (
								<>
									<Select.Button
										as={FormButton}
										bounce={false}
										hasInput={!LangUtils.isNil(field.value)}
										size="small"
										type="button"
										variant="input"
									>
										<span tw="flex-grow">
											{field.value ?? "Experience type"}
										</span>
										<ExpandIcon open={open} tw="ml-1" />
									</Select.Button>
									<Select.Options>
										{(
											[
												[ExperienceType.Contract, "Contract"],
												[ExperienceType.FullTime, "Full-time"],
												[ExperienceType.Intern, "Intern"],
												[ExperienceType.OpenSource, "Open-source"],
												[ExperienceType.PartTime, "Part-time"]
											] as [ExperienceType, string][]
										).map(([experienceType, name]) => (
											<Select.Option
												key={experienceType}
												value={experienceType}
											>
												{(optionProps) => (
													<ListItem {...optionProps}>{name}</ListItem>
												)}
											</Select.Option>
										))}
									</Select.Options>
								</>
							)}
						</Select>
					)}
				/>
				<FormHelperText error={errors.type?.message} />
			</FormGroup>
			<FormGroup tw="mt-4">
				<FormLabel>Company name</FormLabel>
				<Controller
					control={control}
					name="organizationName"
					render={({ field }) => (
						<OrganizationInput
							name={field.name}
							onChange={field.onChange}
							value={field.value}
						/>
					)}
				/>
				<FormHelperText error={errors.organizationName?.message} />
			</FormGroup>
			<FormGroup tw="mt-4">
				<FormLabel>Location</FormLabel>
				<Input {...register("location")} placeholder="Location" aria-label="location" />
				<FormHelperText error={errors.location?.message} />
			</FormGroup>
			<div tw="mt-4">
				<FormLabel>Start date</FormLabel>
				<DateSelectorContainer>
					<FormGroup>
						<Controller
							control={control}
							name="startDate.month"
							render={({ field }) => (
								<Select onChange={field.onChange} value={field.value}>
									{({ open }) => (
										<>
											<Select.Button
												as={FormButton}
												bounce={false}
												hasInput={!LangUtils.isNil(field.value)}
												size="small"
												type="button"
												variant="input"
											>
												<span tw="flex-grow">
													{LangUtils.isNil(field.value)
														? "Month"
														: dayjs().month(field.value).format("MMMM")}
												</span>
												<ExpandIcon open={open} tw="ml-1" />
											</Select.Button>
											<Select.Options>
												{Array.from({ length: 12 }, (_, i) => (
													<Select.Option key={i} value={i}>
														{(optionProps) => (
															<ListItem {...optionProps}>
																{dayjs().month(i).format("MMMM")}
															</ListItem>
														)}
													</Select.Option>
												))}
											</Select.Options>
										</>
									)}
								</Select>
							)}
						/>
					</FormGroup>
					<FormGroup>
						<Controller
							control={control}
							name="startDate.year"
							render={({ field }) => (
								<Select onChange={field.onChange} value={field.value}>
									{({ open }) => (
										<>
											<Select.Button
												as={FormButton}
												bounce={false}
												hasInput={!LangUtils.isNil(field.value)}
												size="small"
												type="button"
												variant="input"
											>
												<span tw="flex-grow">{field.value ?? "Year"}</span>
												<ExpandIcon open={open} tw="ml-1" />
											</Select.Button>
											<Select.Options>
												{Array.from({ length: 100 }, (_, i) => (
													<Select.Option
														key={i}
														value={new Date().getFullYear() - i}
													>
														{(optionProps) => (
															<ListItem {...optionProps}>
																{dayjs()
																	.subtract(i, "year")
																	.format("YYYY")}
															</ListItem>
														)}
													</Select.Option>
												))}
											</Select.Options>
										</>
									)}
								</Select>
							)}
						/>
					</FormGroup>
				</DateSelectorContainer>
				<FormHelperText
					error={errors.startDate ? "Must provide a valid start date" : null}
				/>
			</div>
			<div tw="my-4">
				<FormLabel>End date</FormLabel>
				<EndDateToggleContainer tw="mt-2">
					<Checkbox
						checked={currentlyWork}
						onChange={(e) => {
							const newChecked = e.target.checked;

							setCurrentlyWork(newChecked);

							newChecked || !endDate
								? setValue("endDate", false)
								: setValue("endDate", {
										month: endDate.month(),
										year: endDate.year()
								  });
						}}
						tw="mr-2"
					/>
					<div>I currently work here</div>
				</EndDateToggleContainer>
				{currentlyWork ? (
					<Controller
						control={control}
						defaultValue={false}
						name="endDate"
						render={() => <HiddenInput checked={false} name="endDate" readOnly />}
					/>
				) : (
					<DateSelectorContainer tw="mt-4">
						<FormGroup>
							<Controller
								control={control}
								name="endDate.month"
								render={({ field }) => (
									<Select onChange={field.onChange} value={field.value}>
										{({ open }) => (
											<>
												<Select.Button
													as={FormButton}
													bounce={false}
													hasInput={!LangUtils.isNil(field.value)}
													size="small"
													type="button"
													variant="input"
												>
													<span tw="flex-grow">
														{LangUtils.isNil(field.value)
															? "Month"
															: dayjs()
																	.month(field.value)
																	.format("MMMM")}
													</span>
													<ExpandIcon open={open} tw="ml-1" />
												</Select.Button>
												<Select.Options>
													{Array.from({ length: 12 }, (_, i) => (
														<Select.Option key={i} value={i}>
															{(optionProps) => (
																<ListItem {...optionProps}>
																	{dayjs()
																		.month(i)
																		.format("MMMM")}
																</ListItem>
															)}
														</Select.Option>
													))}
												</Select.Options>
											</>
										)}
									</Select>
								)}
							/>
						</FormGroup>
						<FormGroup>
							<Controller
								control={control}
								name="endDate.year"
								render={({ field }) => (
									<Select onChange={field.onChange} value={field.value}>
										{({ open }) => (
											<>
												<Select.Button
													as={FormButton}
													bounce={false}
													hasInput={!LangUtils.isNil(field.value)}
													size="small"
													type="button"
													variant="input"
												>
													<span tw="flex-grow">
														{field.value ?? "Year"}
													</span>
													<ExpandIcon open={open} tw="ml-1" />
												</Select.Button>
												<Select.Options>
													{Array.from({ length: 100 }, (_, i) => (
														<Select.Option
															key={i}
															value={new Date().getFullYear() - i}
														>
															{(optionProps) => (
																<ListItem {...optionProps}>
																	{dayjs()
																		.subtract(i, "year")
																		.format("YYYY")}
																</ListItem>
															)}
														</Select.Option>
													))}
												</Select.Options>
											</>
										)}
									</Select>
								)}
							/>
						</FormGroup>
						<FormHelperText
							error={errors.endDate ? "Must provide a valid end date" : null}
						/>
					</DateSelectorContainer>
				)}
				<FormGroup tw="mt-4">
					<FormLabel>Highlights</FormLabel>
					{highlights.map((field, i) => (
						<ControlGroup key={field.id} tw="not-first:mt-2">
							<Input
								{...register(`highlights.${i}.value`)}
								placeholder="I built a thing that..."
							/>
							<FormButton
								bounce={false}
								onClick={() => {
									remove(i);
								}}
								size="small"
								type="button"
								variant="alert"
								tw="h-10 w-10"
							>
								<XIcon height={24} width={24} />
							</FormButton>
						</ControlGroup>
					))}
					<FormButton
						disabled={highlights.length >= 5}
						onClick={() => {
							append("");
						}}
						size="small"
						type="button"
						tw="[:not(:nth-child(2))]:mt-4"
					>
						Add highlight
					</FormButton>
					<FormHelperText error={(errors.highlights as any)?.message} />
				</FormGroup>
			</div>
			<ActionsContainer tw="mt-8">
				<FormButton type="submit">
					<span>Save</span>
					{fetching && <Spinner tw="ml-2" />}
				</FormButton>
				<FormButton onClick={onClose} type="button" variant="secondary">
					Cancel
				</FormButton>
			</ActionsContainer>
		</Form>
	);
};
