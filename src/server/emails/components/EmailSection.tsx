import type { InferComponentProps } from "@/client/types";
import { MjmlSection } from "mjml-react";
import styled from "styled-components";
import { withCssClass } from "./withCssClass";

export type EmailSectionProps = InferComponentProps<typeof EmailSection>;

export const EmailSection = styled(withCssClass(MjmlSection))``;

EmailSection.defaultProps = {
	padding: 0
};
