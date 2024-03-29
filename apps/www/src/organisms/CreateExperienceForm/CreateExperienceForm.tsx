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
	toast,
	XIcon
} from "@makepurple/components";
import { dayjs, LangUtils } from "@makepurple/utils";
import { ExperienceCreateInput } from "@makepurple/validators";
import { Type } from "computed-types";
import React, { CSSProperties, FC, SyntheticEvent, useEffect, useMemo } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import tw from "twin.macro";
import { ExperienceType, useCreateExperienceMutation } from "../../graphql";
import { OrganizationAutosuggest } from "../OrganizationAutosuggest";

const ExperienceSelectorContainer = tw(FormGroup)`
	max-width[26rem]
	w-full
`;

const DateFormGroup = tw(FormGroup)`
	max-width[26rem]
	w-full
`;

const DateSelectorContainer = tw.div`
	grid
	grid-template-columns[repeat(auto-fill, minmax(12rem, 1fr))]
	gap-4
`;

const SelectButton = tw(FormButton)`
	h-10
`;

const EndDateToggleContainer = tw.div`
	flex
`;

const AddHighlightButton = tw(FormButton)`
	max-width[10rem]
	w-full
`;

const ActionsContainer = tw.div`
	grid
	grid-template-columns[repeat(auto-fill, minmax(12rem, 1fr))]
	gap-4
`;

export interface CreateExperienceFormProps {
	className?: string;
	onClose?: (e?: SyntheticEvent) => void;
	style?: CSSProperties;
}

export const CreateExperienceForm: FC<CreateExperienceFormProps> = ({
	className,
	onClose,
	style
}) => {
	const today = useMemo(() => dayjs(), []);

	const [{ data: createData, fetching }, createExperience] = useCreateExperienceMutation();

	const createErrors = createData?.createExperience.errors;

	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
		setError,
		setValue,
		watch
	} = useForm<Type<typeof ExperienceCreateInput>>({
		defaultValues: {
			endDate: {
				month: today.month(),
				year: today.year()
			},
			highlights: [],
			location: "",
			organizationName: "",
			positionName: "",
			startDate: {
				month: undefined,
				year: undefined
			},
			type: undefined
		},
		resolver: computedTypesResolver(ExperienceCreateInput)
	});

	const {
		fields: highlights,
		append,
		remove
	} = useFieldArray({
		control,
		name: "highlights"
	});

	const currentEndDate = watch("endDate");

	useEffect(() => {
		createErrors?.forEach((error) => {
			switch (error.__typename) {
				case "InvalidOrganizationError":
					setError("organizationName", { message: error.message });

					break;
				default:
			}
		});
	}, [createErrors, setError]);

	return (
		<Form
			className={className}
			disabled={fetching}
			onSubmit={handleSubmit(async (formData) => {
				const startDate =
					formData.startDate instanceof Date
						? formData.startDate
						: dayjs("2000-01-01T00:00:00.000Z")
								.month(formData.startDate.month)
								.year(formData.startDate.year)
								.toDate();

				const endDate = !formData.endDate
					? null
					: formData.endDate instanceof Date
					? formData.endDate
					: dayjs("2000-01-01T00:00:00.000Z")
							.month(formData.endDate.month)
							.year(formData.endDate.year)
							.toDate();

				const didSucceed = await createExperience({
					data: {
						endDate,
						highlights: formData.highlights.map(
							(highlight: string | { value: string }) =>
								typeof highlight === "string" ? highlight : highlight.value
						),
						location: formData.location,
						organizationName: formData.organizationName,
						positionName: formData.positionName,
						startDate,
						type: formData.type as Maybe<ExperienceType>
					}
				})
					.then((result) => !!result.data?.createExperience.record)
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
			<ExperienceSelectorContainer tw="mt-4">
				<FormLabel>Experience type</FormLabel>
				<Controller
					control={control}
					name="type"
					render={({ field }) => (
						<Select onChange={field.onChange} value={field.value as ExperienceType}>
							{({ open }) => (
								<>
									<Select.Button
										as={SelectButton}
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
			</ExperienceSelectorContainer>
			<FormGroup tw="mt-4">
				<FormLabel>Company name</FormLabel>
				<Controller
					control={control}
					name="organizationName"
					render={({ field }) => (
						<OrganizationAutosuggest
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
			<DateFormGroup tw="mt-4">
				<FormLabel>Start date</FormLabel>
				<DateSelectorContainer>
					<Controller
						control={control}
						name="startDate.month"
						render={({ field }) => (
							<Select onChange={field.onChange} value={field.value}>
								{({ open }) => (
									<>
										<Select.Button
											as={SelectButton}
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
					<Controller
						control={control}
						name="startDate.year"
						render={({ field }) => (
							<Select onChange={field.onChange} value={field.value}>
								{({ open }) => (
									<>
										<Select.Button
											as={SelectButton}
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
				</DateSelectorContainer>
				<FormHelperText
					error={errors.startDate ? "Must provide a valid start date" : null}
				/>
			</DateFormGroup>
			<DateFormGroup tw="my-4">
				<FormLabel>End date</FormLabel>
				<EndDateToggleContainer tw="mt-2">
					<Checkbox
						checked={!currentEndDate}
						onChange={(e) => {
							const newChecked = e.target.checked;

							newChecked
								? setValue("endDate", false)
								: setValue("endDate", {
										month: today.month(),
										year: today.year()
								  });
						}}
						tw="mr-2"
					/>
					<div>I currently work here</div>
				</EndDateToggleContainer>
				{!currentEndDate ? (
					<Controller
						control={control}
						defaultValue={false}
						name="endDate"
						render={() => <HiddenInput checked={false} name="endDate" readOnly />}
					/>
				) : (
					<>
						<DateSelectorContainer tw="mt-4">
							<Controller
								control={control}
								name="endDate.month"
								render={({ field }) => (
									<Select onChange={field.onChange} value={field.value}>
										{({ open }) => (
											<>
												<Select.Button
													as={SelectButton}
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
							<Controller
								control={control}
								name="endDate.year"
								render={({ field }) => (
									<Select onChange={field.onChange} value={field.value}>
										{({ open }) => (
											<>
												<Select.Button
													as={SelectButton}
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
						</DateSelectorContainer>
						<FormHelperText
							error={errors.endDate ? "Must provide a valid end date" : null}
						/>
					</>
				)}
			</DateFormGroup>
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
				<AddHighlightButton
					disabled={highlights.length >= 5}
					onClick={() => {
						append("");
					}}
					size="small"
					type="button"
					tw="[:not(:nth-child(2))]:mt-4"
				>
					Add highlight
				</AddHighlightButton>
				<FormHelperText error={(errors.highlights as any)?.message} />
			</FormGroup>
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
