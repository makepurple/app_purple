import initStoryshots, { Stories2SnapsConverter } from "@storybook/addon-storyshots";
import { act, create } from "react-test-renderer";

const converter = new Stories2SnapsConverter();

initStoryshots({
	asyncJest: true,
	test: async ({ story, context, done }) => {
		const filename = converter.getSnapshotFileName(context);

		if (!filename) {
			return;
		}

		// render the component
		const renderer = create(story.render());

		// wait for state changes, wrapped in act
		await act(() => new Promise((resolve) => setTimeout(resolve)));

		expect(renderer.toJSON()).toMatchSpecificSnapshot(filename);

		renderer.unmount();

		done?.();
	}
});
