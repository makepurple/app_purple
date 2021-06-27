import { objectType } from "nexus";
import { Skill } from "nexus-prisma";

export const skillTypes = [
	objectType({
		name: Skill.$name,
		description: Skill.$description,
		definition: (t) => {
			t.field(Skill.id);
			t.field(Skill.name);
			t.field(Skill.users);
		}
	})
];
