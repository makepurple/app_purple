import type { InferComponentProps } from "@/client/types";
import { withCssClass } from "@/server/emails/mjml-styled";
import { MjmlImage } from "mjml-react";
import styled from "styled-components";

export type EmailImageProps = InferComponentProps<typeof EmailImage>;

export const EmailImage = styled(withCssClass(MjmlImage))``;

EmailImage.defaultProps = {
	padding: 0
};
