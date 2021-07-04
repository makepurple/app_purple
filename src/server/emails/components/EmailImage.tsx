import type { InferComponentProps } from "@/client/types";
import { MjmlImage } from "mjml-react";
import styled from "styled-components";
import { withCssClass } from "./withCssClass";

export type EmailImageProps = InferComponentProps<typeof EmailImage>;

export const EmailImage = styled(withCssClass(MjmlImage))``;

EmailImage.defaultProps = {
	padding: 0
};
