import Schema, { string } from "computed-types";

export const SkillWhereUniqueInput = Schema.either(
	Schema({ id: string.error("Required") }),
	Schema({
		name_owner: Schema({
			name: string.error("Required"),
			owner: string.error("Required")
		})
	})
);
