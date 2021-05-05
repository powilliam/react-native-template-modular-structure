import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export interface Themes {
  light?: DefaultTheme;
  dark?: DefaultTheme;
  fallback: DefaultTheme;
}

export interface ThemeProviderProps {
  theme: Themes;
  children?: ReactNode;
}
