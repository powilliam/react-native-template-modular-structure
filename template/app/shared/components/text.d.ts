import { ReactNode } from "react";
import { TextProps as RNTextProps } from "react-native";
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  BorderProps,
  TypographyProps,
} from "styled-system";

export interface WithAs {
  as?: ReactNode;
}

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
