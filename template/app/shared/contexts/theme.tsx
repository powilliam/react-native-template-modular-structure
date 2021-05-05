import React, { useMemo, useEffect } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import AndroidNavigationBar from "react-native-android-navigation-bar";

import { ThemeProviderProps } from "app/shared/contexts/theme.d";

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
