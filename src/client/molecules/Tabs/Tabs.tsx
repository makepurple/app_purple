import { ObjectUtils } from "@/utils";
import tw from "twin.macro";
import { Tab } from "./Tab";

const _Tabs = tw.div`
	flex
	items-center
	justify-between
`;

export const Tabs = ObjectUtils.setStatic(_Tabs, { Tab });
