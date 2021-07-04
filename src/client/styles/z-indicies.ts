export const ZIndicies = ["default", "app-bar"] as const;

export type ZIndexType = typeof ZIndicies[number];

export const getZIndex = (type: ZIndexType): number => {
	return ZIndicies.indexOf(type);
};
