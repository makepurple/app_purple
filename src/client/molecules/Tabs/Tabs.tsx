import { ObjectUtils } from "@/utils";
import { styled } from "twin.macro";
import { Tab } from "./Tab";

const _Tabs = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Tabs = ObjectUtils.setStatic(_Tabs, { Tab });
