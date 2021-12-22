import { computedTypesResolver } from "@hookform/resolvers/computed-types";
import {
	Button,
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
	XIcon
} from "@makepurple/components";
import { dayjs, LangUtils } from "@makepurple/utils";
import { ExperienceCreateInput } from "@makepurple/validators";
import { Type } from "computed-types";
import React, { CSSProperties, FC, SyntheticEvent, useMemo, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import tw from "twin.macro";
import { ExperienceType } from "../../graphql";
import { OrganizationInput } from "../OrganizationInput";

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

	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
		setValue
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

	const [currentlyWork, setCurrentlyWork] = useState<boolean>(false);

	return (
		<Form
			className={className}
			onSubmit={handleSubmit((formData) => {
				/**
				 * TODO
				 * @description Remove this when this is completed
				 * @author David Lee
				 * @date December 11, 2021
				 */
				// eslint-disable-next-line no-console
				console.log(formData);
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
										as={Button}
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
												as={Button}
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
												as={Button}
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

							newChecked
								? setValue("endDate", false)
								: setValue("endDate", { month: today.month(), year: today.year() });
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
													as={Button}
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
													as={Button}
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
				<FormButton type="submit">Save</FormButton>
				<FormButton onClick={onClose} type="button" variant="secondary">
					Cancel
				</FormButton>
			</ActionsContainer>
		</Form>
	);
};
