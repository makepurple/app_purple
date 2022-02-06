import { ObjectUtils } from "@makepurple/utils";
import tw from "twin.macro";
import { OrderedListItem } from "./OrderedListItem";

const _OrderedList = tw.ol`
	list-decimal
	list-inside
`;

export const OrderedList = ObjectUtils.setStatic(_OrderedList, {
	Item: OrderedListItem
});
