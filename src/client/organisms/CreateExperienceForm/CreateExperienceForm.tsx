import {
	Button,
	ExpandIcon,
	Form,
	FormGroup,
	FormHelperText,
	FormLabel,
	Input,
	ListItem,
	Select
} from "@/client/atoms";
import { ExperienceType } from "@/client/graphql";
import { dayjs, LangUtils } from "@/utils";
import { ExperienceCreateInput } from "@/validators";
import { computedTypesResolver } from "@hookform/resolvers/computed-types";
import { Type } from "computed-types";
import React, { CSSProperties, FC } from "react";
import { Controller, useForm } from "react-hook-form";
import tw from "twin.macro";

const DateSelectorContainer = tw.div`
	grid
	grid-template-columns[repeat(auto-fit, minmax(280px, 1fr))]
	gap-4
`;

const ExperienceTypeSelect = Select.ofType<Maybe<ExperienceType>>();
const NumberSelect = Select.ofType<Maybe<number>>();

export interface CreateExperienceFormProps {
	className?: string;
	style?: CSSProperties;
}

export const CreateExperienceForm: FC<CreateExperienceFormProps> = ({ className, style }) => {
	const {
		control,
		formState: { errors },
		handleSubmit,
		register
	} = useForm<Type<typeof ExperienceCreateInput>>({
		defaultValues: {
			endDate: undefined,
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
						<ExperienceTypeSelect
							onChange={field.onChange}
							value={field.value as ExperienceType}
						>
							{({ open }) => (
								<>
									<ExperienceTypeSelect.Button
										as={Button}
										size="small"
										type="button"
										variant="secondary"
									>
										<span tw="flex-grow">
											{field.value ?? "Experience type"}
										</span>
										<ExpandIcon open={open} tw="ml-1" />
									</ExperienceTypeSelect.Button>
									<ExperienceTypeSelect.Options>
										{(
											[
												[ExperienceType.Contract, "Contract"],
												[ExperienceType.FullTime, "Full-time"],
												[ExperienceType.Intern, "Intern"],
												[ExperienceType.OpenSource, "Open-source"],
												[ExperienceType.PartTime, "Part-time"]
											] as [ExperienceType, string][]
										).map(([experienceType, name]) => (
											<ExperienceTypeSelect.Option
												key={experienceType}
												value={experienceType}
											>
												{(optionProps) => (
													<ListItem {...optionProps}>{name}</ListItem>
												)}
											</ExperienceTypeSelect.Option>
										))}
									</ExperienceTypeSelect.Options>
								</>
							)}
						</ExperienceTypeSelect>
					)}
				/>
				<FormHelperText error={errors.type?.message} />
			</FormGroup>
			<div tw="mt-4">
				<FormLabel>Start date</FormLabel>
				<DateSelectorContainer>
					<FormGroup>
						<Controller
							control={control}
							name="startDate.month"
							render={({ field }) => (
								<NumberSelect onChange={field.onChange} value={field.value}>
									{({ open }) => (
										<>
											<NumberSelect.Button
												as={Button}
												size="small"
												type="button"
												variant="secondary"
											>
												<span tw="flex-grow">
													{LangUtils.isNil(field.value)
														? "Month"
														: dayjs().month(field.value).format("MMMM")}
												</span>
												<ExpandIcon open={open} tw="ml-1" />
											</NumberSelect.Button>
											<NumberSelect.Options>
												{Array.from({ length: 12 }, (_, i) => (
													<NumberSelect.Option key={i} value={i}>
														{(optionProps) => (
															<ListItem {...optionProps}>
																{dayjs().month(i).format("MMMM")}
															</ListItem>
														)}
													</NumberSelect.Option>
												))}
											</NumberSelect.Options>
										</>
									)}
								</NumberSelect>
							)}
						/>
					</FormGroup>
					<FormGroup>
						<Controller
							control={control}
							name="startDate.year"
							render={({ field }) => (
								<NumberSelect onChange={field.onChange} value={field.value}>
									{({ open }) => (
										<>
											<NumberSelect.Button
												as={Button}
												size="small"
												type="button"
												variant="secondary"
											>
												<span tw="flex-grow">{field.value ?? "Year"}</span>
												<ExpandIcon open={open} tw="ml-1" />
											</NumberSelect.Button>
											<NumberSelect.Options>
												{Array.from({ length: 100 }, (_, i) => (
													<NumberSelect.Option
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
													</NumberSelect.Option>
												))}
											</NumberSelect.Options>
										</>
									)}
								</NumberSelect>
							)}
						/>
					</FormGroup>
				</DateSelectorContainer>
			</div>
			<div tw="mt-4">
				<FormLabel>End date</FormLabel>
				<DateSelectorContainer>
					<FormGroup>
						<Controller
							control={control}
							name="endDate.month"
							render={({ field }) => (
								<NumberSelect onChange={field.onChange} value={field.value}>
									{({ open }) => (
										<>
											<NumberSelect.Button
												as={Button}
												size="small"
												type="button"
												variant="secondary"
											>
												<span tw="flex-grow">
													{LangUtils.isNil(field.value)
														? "Month"
														: dayjs().month(field.value).format("MMMM")}
												</span>
												<ExpandIcon open={open} tw="ml-1" />
											</NumberSelect.Button>
											<NumberSelect.Options>
												{Array.from({ length: 12 }, (_, i) => (
													<NumberSelect.Option key={i} value={i}>
														{(optionProps) => (
															<ListItem {...optionProps}>
																{dayjs().month(i).format("MMMM")}
															</ListItem>
														)}
													</NumberSelect.Option>
												))}
											</NumberSelect.Options>
										</>
									)}
								</NumberSelect>
							)}
						/>
					</FormGroup>
					<FormGroup>
						<Controller
							control={control}
							name="endDate.year"
							render={({ field }) => (
								<NumberSelect onChange={field.onChange} value={field.value}>
									{({ open }) => (
										<>
											<NumberSelect.Button
												as={Button}
												size="small"
												type="button"
												variant="secondary"
											>
												<span tw="flex-grow">{field.value ?? "Year"}</span>
												<ExpandIcon open={open} tw="ml-1" />
											</NumberSelect.Button>
											<NumberSelect.Options>
												{Array.from({ length: 100 }, (_, i) => (
													<NumberSelect.Option
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
													</NumberSelect.Option>
												))}
											</NumberSelect.Options>
										</>
									)}
								</NumberSelect>
							)}
						/>
					</FormGroup>
				</DateSelectorContainer>
			</div>
		</Form>
	);
};
