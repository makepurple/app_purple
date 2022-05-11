import { MathUtils } from "@makepurple/utils";
import { createApi } from "unsplash-js";
import type { RandomParams } from "unsplash-js/dist/methods/photos";
import { Random } from "unsplash-js/dist/methods/photos/types";

export class UnsplashClient {
	private api = createApi({
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		accessKey: process.env.UNSPLASH_API_KEY!
	});

	public async getRandom(params: RandomParams = {}): Promise<Random[]> {
		const {
			count = 1,
			orientation = "landscape",
			query = "programming",
			...restParams
		} = params;

		const response = await this.api.photos.getRandom({
			count: MathUtils.clamp(count, [1, 20]),
			orientation,
			query,
			...restParams
		});

		const hits = response.response;

		if (!hits) return [];

		return Array.isArray(hits) ? hits : [hits];
	}
}
