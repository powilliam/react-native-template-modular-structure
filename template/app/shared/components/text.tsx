import { TextProps as RNTextProps } from 'react-native';
import styled from 'styled-components/native';
import {
  space,
  color,
  layout,
  border,
  variant,
  SpaceProps,
  ColorProps,
  LayoutProps,
  BorderProps,
} from 'styled-system';

export enum TextVariants {}

export interface WithVariant {
  variant?: TextVariants;
}

export type TextProps = RNTextProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  BorderProps &
  WithVariant;

export const Text = styled.Text<TextProps>`
  ${space};
  ${color};
  ${layout};
  ${border};
  ${variant({
    variants: {},
  })}
`;
