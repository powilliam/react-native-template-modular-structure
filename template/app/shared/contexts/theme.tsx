import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { Appearance, ColorSchemeName } from "react-native";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components/native";
import AndroidNavigationBar from "react-native-android-navigation-bar";

import {
  ThemeConsumerProps,
  ThemeContextProps,
  ThemeProviderProps,
} from "app/shared/contexts/theme.d";

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export function useTheme() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error(
      "Ensure that you have wrapped your application with ThemeProvider"
    );
  }

  return theme;
}

export function ThemeConsumer({ children }: ThemeConsumerProps) {
  return (
    <ThemeContext.Consumer>
      {(context) => children(context)}
    </ThemeContext.Consumer>
  );
}

export function ThemeProvider({
  light,
  dark,
  fallback,
  themes,
  children,
}: ThemeProviderProps) {
  const [currentColorScheme, setCurrentColorScheme] = useState<ColorSchemeName>(
    () => (Appearance.getColorScheme() === "dark" && !!dark ? "dark" : "light")
  );

  const theme = useMemo(() => {
    if (currentColorScheme === "light" && !!light) return light;
    if (currentColorScheme === "dark" && !!dark) return dark;
    return fallback;
  }, [currentColorScheme, dark, light, fallback]);

  const onPreferencesChanged = useCallback<Appearance.AppearanceListener>(
    (preferences) =>
      setCurrentColorScheme(() =>
        preferences.colorScheme === "dark" && !!dark ? "dark" : "light"
      ),
    []
  );

  useEffect(() => {
    AndroidNavigationBar.changeColor(
      theme.colors.background,
      !theme.dark,
      true
    );
  }, [theme]);

  useEffect(() => {
    Appearance.addChangeListener(onPreferencesChanged);
    return () => Appearance.removeChangeListener(onPreferencesChanged);
  });

  return (
    <ThemeContext.Provider
      value={{ schema: currentColorScheme, theme, themes }}
    >
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
