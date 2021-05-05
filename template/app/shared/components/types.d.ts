import { ReactNode } from "react";
import {
  ViewProps as RNViewProps,
  TextProps as RNTextProps,
} from "react-native";
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  TypographyProps,
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

export enum TextVariants {}

export interface WithVariant {
  variant?: TextVariants;
}

export type TextProps = RNTextProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  BorderProps &
  TypographyProps &
  WithVariant;
