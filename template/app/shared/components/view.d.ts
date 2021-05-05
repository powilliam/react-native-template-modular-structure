import { ReactNode } from "react";
import { ViewProps as RNViewProps } from "react-native";
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from "styled-system";

export interface WithAs {
  as?: ReactNode;
}

export type ViewProps = RNViewProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  WithAs;
