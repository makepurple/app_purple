import type { InferComponentProps } from "@/client/types";
import { MjmlDivider } from "mjml-react";
import styled from "styled-components";
import { withCssClass } from "./withCssClass";

export type EmailDividerProps = InferComponentProps<typeof EmailDivider>;

export const EmailDivider = styled(withCssClass(MjmlDivider))``;

EmailDivider.defaultProps = {
	borderColor: "#dddddd",
	borderStyle: "solid",
	borderWidth: 1
};
