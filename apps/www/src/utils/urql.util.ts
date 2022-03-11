import { FieldInfo } from "@urql/exchange-graphcache";

export class UrqlUtils {
	public static getFieldKey(field: FieldInfo): string {
		return `${field.fieldName}${
			field.arguments
				? `(${Object.entries(field.arguments)
						.map(([key, value]) => `${key}:${value}`)
						.join(",")})`
				: ""
		}`;
	}
}
