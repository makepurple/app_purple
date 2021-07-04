import type { InferComponentProps } from "@/client/types";
import { withCssClass } from "@/server/emails/mjml-styled";
import { MjmlColumn } from "mjml-react";
import styled from "styled-components";

export type EmailColumnProps = InferComponentProps<typeof EmailColumn>;

export const EmailColumn = styled(withCssClass(MjmlColumn))``;

EmailColumn.defaultProps = {
	padding: 0
};
