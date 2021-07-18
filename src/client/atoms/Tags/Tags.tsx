import { ObjectUtils } from "@/utils";
import styled from "styled-components";
import { Tag, TagType } from "./Tag";

export const Tags = ObjectUtils.setStatic(
	styled.div<{ type: TagType }>`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin: -0.25rem;

		& ${Tag} {
			background-color: ${({ theme, type }) => {
				switch (type) {
					case "positive":
						return theme.palette.blue;
					case "negative":
						return theme.palette.red;
					case "neutral":
					default:
						return theme.palette.grey;
				}
			}};
		}
	`,
	{ Tag }
);
