import { Logger } from "@/server/utils";
import { UserInputError } from "apollo-server-micro";
import { oneLine } from "common-tags";
import { GraphQLResolveInfo } from "graphql";
import {
	ArgsValue,
	GetGen,
	MaybePromise,
	plugin,
	printedGenTyping,
	printedGenTypingImport,
	SourceValue
} from "nexus/dist/core";
import { FieldError } from "react-hook-form";
import { object, ValidationError } from "yup";
import { ObjectShape } from "yup/lib/object";

/* eslint-disable no-console */

const fieldYupValidationResolverImport = printedGenTypingImport({
	module: "@/server/graphql/nexus/plugins/yup-validation.plugin",
	bindings: ["FieldYupValidationResolver"]
});

const fieldDefTypes = printedGenTyping({
	optional: true,
	name: "yupValidation",
	description: oneLine`
		\`yup\` validation plugin for an individual field. Requires that an object schema
		definition be defined for the input args.
	`,
	type: "FieldYupValidationResolver<TypeName, FieldName>",
	imports: [fieldYupValidationResolverImport]
});

export type FieldYupValidationResolver<TypeName extends string, FieldName extends string> = (
	root: SourceValue<TypeName>,
	args: ArgsValue<TypeName, FieldName>,
	context: GetGen<"context">,
	info: GraphQLResolveInfo
) => MaybePromise<ObjectShape>;

export const yupValidationPlugin = () => {
	return plugin({
		name: "CustomNexusYupValidation",
		description: `
			The yupValidation plugin provides a field-level, input validation via \`yup\` for a
			schema
		`,
		fieldDefTypes,
		onCreateFieldResolver: (config) => {
			const yupValidation = config.fieldConfig.extensions?.nexus?.config.yupValidation;

			/**
			 * @description If the field doesn't have a yupValidation field, don't worry about
			 *     wrapping the resolver
			 */
			if (yupValidation == null) {
				return;
			}

			if (typeof yupValidation !== "function") {
				console.error(
					new Error(
						`The yupValidation property provided to ${
							config.fieldConfig.name
						} with type ${
							config.fieldConfig.type
						} should be a function, saw ${typeof yupValidation}`
					)
				);

				return;
			}

			return async (parent, args, context, info, next) => {
				const objectSchemaDef: ObjectShape = await yupValidation(
					parent,
					args,
					context,
					info
				);

				let values: typeof args;

				const yupSchema = object(objectSchemaDef);

				try {
					values = await yupSchema.validate(args, { abortEarly: false });
				} catch (errors) {
					if (!(errors instanceof ValidationError)) {
						throw errors;
					}

					/**
					 * @description Construct invalidArgs in a way that is easily consumed by
					 *     react-hook-form, if form names are the same as inputs. `name` is a
					 *     lodash/(get/set)-compatible path
					 * @author David Lee
					 * @date April 21, 2020
					 */
					const invalidArgs = errors.inner.reduce(
						(fieldErrors, { message, path: name, type = "validation" }) => [
							...fieldErrors,
							{ message, name, type }
						],
						[] as readonly FieldError[]
					);

					Logger.error("Invalid user input", { invalidArgs });

					throw new UserInputError("Invalid user input", { invalidArgs });
				}

				const casted = (await Promise.resolve(yupSchema.cast(values))) ?? {};

				return next(parent, casted, context, info);
			};
		}
	});
};
