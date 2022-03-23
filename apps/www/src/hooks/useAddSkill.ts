import { useCallback, useMemo } from "react";
import { SkillWhereUniqueInput, useAddSkillMutation, useRemoveSkillMutation } from "../graphql";

export const useAddSkill = (isAdded: boolean) => {
	const [{ fetching: adding }, addSkill] = useAddSkillMutation();
	const [{ fetching: removing }, removeSkill] = useRemoveSkillMutation();

	const action = useCallback(
		async (variables: { where: SkillWhereUniqueInput }) => {
			const response = isAdded
				? await removeSkill(variables).then((result) => result.data?.removeSkill)
				: await addSkill(variables).then((result) => result.data?.addSkill);

			return response;
		},
		[addSkill, isAdded, removeSkill]
	);

	const fetching = adding || removing;

	const states = useMemo(() => ({ fetching }), [fetching]);

	return [states, action] as [typeof states, typeof action];
};
