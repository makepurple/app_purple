import { Tags, TagType } from "@/client/molecules";
import React, { CSSProperties, FC } from "react";
import { Control, useFieldArray } from "react-hook-form";

export interface UserSkillsInputProps {
	className?: string;
	control?: Control<{
		[key: string]: {
			id: string;
			name: string;
			owner: string;
		}[];
	}>;
	name: string;
	style?: CSSProperties;
	type?: TagType;
	value: readonly { id: number; name: string; owner: string }[];
}

export const UserSkillsInput: FC<UserSkillsInputProps> = ({
	className,
	control,
	name,
	style,
	value
}) => {
	const { fields } = useFieldArray({ control, name });

	return (
		<Tags className={className} style={style}>
			{fields.map((skill, i) => (
				<Tags.Tag key={skill.id}>{skill.name}</Tags.Tag>
			))}
		</Tags>
	);
};
