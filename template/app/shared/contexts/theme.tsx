import React, { useMemo, useEffect, ReactNode } from "react";
import { useColorScheme } from "react-native";
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from "styled-components";
import AndroidNavigationBar from "react-native-android-navigation-bar";

export interface Themes {
  light?: DefaultTheme;
  dark?: DefaultTheme;
  fallback: DefaultTheme;
}

export interface ThemeProviderProps {
  theme: Themes;
  children?: ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const colorScheme = useColorScheme();

  const currentSystemTheme = useMemo(() => {
    if (colorScheme === "dark" && !!theme.dark) return theme.dark;
    else if (colorScheme === "light" && !!theme.light) return theme.light;
    return theme.fallback;
  }, [theme, colorScheme]);

  useEffect(() => {
    const isLight = colorScheme === "light";

    AndroidNavigationBar.changeColor(
      currentSystemTheme.colors.background,
      isLight,
      true
    );
  }, [currentSystemTheme, colorScheme]);

  return (
    <StyledThemeProvider theme={currentSystemTheme}>
      {children}
    </StyledThemeProvider>
  );
}
