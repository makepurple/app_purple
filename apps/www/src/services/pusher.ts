import Pusher from "pusher-js";

export const getPusher = (): Pusher => {
	const pusher = new Pusher(process.env.PUSHER_KEY ?? "", {
		cluster: process.env.PUSHER_CLUSTER
	});

	if (process.env.STORYBOOK) {
		// eslint-disable-next-line @typescript-eslint/unbound-method
		return {
			...pusher,
			subscribe: () => ({ bind: () => undefined } as any),
			unsubscribe: () => undefined as any
		} as any;
	}

	return pusher;
};
