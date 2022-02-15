import { useCallback, useMemo } from "react";
import { SkillWhereUniqueInput, useAddSkillMutation, useRemoveSkillMutation } from "../graphql";

export const useAddSkill = (isAdded: boolean) => {
	const [{ fetching: adding }, addSkill] = useAddSkillMutation();
	const [{ fetching: removing }, removeSkill] = useRemoveSkillMutation();

	const action = useCallback(
		async (variables: { where: SkillWhereUniqueInput }) => {
			isAdded ? await removeSkill(variables) : await addSkill(variables);
		},
		[addSkill, isAdded, removeSkill]
	);

	const fetching = adding || removing;

	const states = useMemo(() => ({ fetching }), [fetching]);

	return [states, action] as [typeof states, typeof action];
};
