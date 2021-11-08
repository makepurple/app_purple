export const ZIndicies = ["default", "page-drawer", "app-bar", "menu"] as const;

export type ZIndexType = typeof ZIndicies[number];

export const getZIndex = (type: ZIndexType): number => {
	return ZIndicies.indexOf(type);
};
