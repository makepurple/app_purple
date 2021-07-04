import type { InferComponentProps } from "@/client/types";
import { withCssClass } from "@/server/emails/mjml-styled";
import { MjmlSection } from "mjml-react";
import styled from "styled-components";

export type EmailSectionProps = InferComponentProps<typeof EmailSection>;

export const EmailSection = styled(withCssClass(MjmlSection))``;

EmailSection.defaultProps = {
	padding: 0
};
