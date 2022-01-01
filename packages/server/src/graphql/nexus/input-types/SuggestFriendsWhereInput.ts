import { oneLine, stripIndents } from "common-tags";
import { inputObjectType } from "nexus";

export const SuggestFriendsWhereInput = inputObjectType({
	name: "SuggestFriendsWhereInput",
	definition: (t) => {
		t.field("desiredSkills", { type: "SkillWhereInput" });
		t.float("desiredSkillsThreshold", {
			default: 0,
			description: stripIndents`
				The min % overlap of suggested users' skills to the viewer's desired-skills.

				This is clamped to [0, 1], and is 0 by default.
			`
		});
		t.float("jitter", {
			default: 0.15,
			description: stripIndents`
				${oneLine`
					Each suggested user's scoring metric (for ordering), can be randomly reduced by
					a % which is the jitter. The larger the jitter, the more random the results can
					be.
				`}

				This is clamped to [0, 1], and is 0.15 by default.
			`
		});
		t.int("jitterSeed", {
			default: 0,
			description: stripIndents`
				Seeds the jitter, so that pagination will be deterministic on the same seed.

				If not provided, the results will be non-deterministically random.
			`
		});
		t.field("skills", { type: "SkillWhereInput" });
		t.float("skillsThreshold", {
			default: 0,
			description: stripIndents`
				The min % overlap of suggested users' skills to the viewer's skills.

				This is clamped to [0, 1], and is 0 by default.
			`
		});
	}
});
