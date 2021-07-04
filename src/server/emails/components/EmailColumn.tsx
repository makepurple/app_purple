import type { InferComponentProps } from "@/client/types";
import { MjmlColumn } from "mjml-react";
import styled from "styled-components";
import { withCssClass } from "./withCssClass";

export type EmailColumnProps = InferComponentProps<typeof EmailColumn>;

export const EmailColumn = styled(withCssClass(MjmlColumn))``;

EmailColumn.defaultProps = {
	padding: 0
};
