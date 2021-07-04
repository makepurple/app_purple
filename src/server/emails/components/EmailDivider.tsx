import type { InferComponentProps } from "@/client/types";
import { withCssClass } from "@/server/emails/mjml-styled";
import { MjmlDivider } from "mjml-react";
import styled from "styled-components";

export type EmailDividerProps = InferComponentProps<typeof EmailDivider>;

export const EmailDivider = styled(withCssClass(MjmlDivider))``;

EmailDivider.defaultProps = {
	borderColor: "#dddddd",
	borderStyle: "solid",
	borderWidth: 1
};
