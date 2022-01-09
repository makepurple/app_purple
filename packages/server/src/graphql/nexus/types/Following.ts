import { unionType } from "nexus";

export const Following = unionType({
	name: "Following",
	definition: (t) => {
		t.members("Skill", "User");
	}
});
