import { ReactNode } from "react";
import { ColorSchemeName } from "react-native";
import { DefaultTheme } from "styled-components/native";

export type ThemeConsumable = (context: ThemeContextProps) => ReactNode;

export interface ThemeConsumerProps {
  children: ThemeConsumable;
}

export interface Theme {
  key: string | symbol;
  theme: DefaultTheme;
}

export interface ThemeContextProps {
  theme: DefaultTheme;
  schema: ColorSchemeName;
  themes?: Theme[];
}

export interface ThemeProviderProps {
  light: DefaultTheme;
  dark?: DefaultTheme;
  themes?: Theme[];
  children?: ReactNode;
}
