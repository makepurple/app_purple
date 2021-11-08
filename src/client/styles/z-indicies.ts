export const ZIndicies = ["default", "app-bar", "backdrop", "page-drawer", "menu"] as const;

export type ZIndexType = typeof ZIndicies[number];

export const getZIndex = (type: ZIndexType): number => {
	return ZIndicies.indexOf(type);
};
