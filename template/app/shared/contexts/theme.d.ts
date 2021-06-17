import { ReactNode } from "react";
import { ColorSchemeName } from "react-native";
import { DefaultTheme } from "styled-components/native";

export type ThemeConsumable = (context: ThemeContextProps) => ReactNode;

export interface DefaultProps {
  children?: ReactNode;
}

export interface ThemeConsumerProps {
  children: ThemeConsumable;
}

export interface ThemeContextProps {
  theme: DefaultTheme;
  schema: ColorSchemeName;
  toggle(): void;
}
export interface WithDarkScheme extends DefaultProps {
  light: DefaultTheme;
  dark: DefaultTheme;
  only?: DefaultTheme;
  observeChanges: boolean;
}

export interface WithSingleTheme extends DefaultProps {
  only: DefaultTheme;
  light?: DefaultTheme;
  dark?: DefaultTheme;
  observeChanges?: boolean;
}

export type ThemeProviderProps = WithDarkScheme | WithSingleTheme;
