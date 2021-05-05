import styled from "styled-components/native";
import { space, color, layout, flexbox, border, position } from "styled-system";

import { ViewProps } from "app/shared/components/view.d";

export const View = styled.View<ViewProps>`
  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${border};
  ${position};
`;
