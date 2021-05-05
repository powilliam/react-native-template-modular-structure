import styled from "styled-components/native";
import {
  space,
  color,
  layout,
  border,
  variant,
  typography,
} from "styled-system";

import { TextProps } from "app/shared/components/text.d";

export const Text = styled.Text<TextProps>`
  ${space};
  ${color};
  ${layout};
  ${border};
  ${typography};
  ${variant({
    variants: {},
  })}
`;
