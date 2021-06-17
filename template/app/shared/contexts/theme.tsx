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
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
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
  only,
  observeChanges,
  children,
}: ThemeProviderProps) {
  const [currentColorScheme, setCurrentColorScheme] = useState<ColorSchemeName>(
    () => Appearance.getColorScheme()
  );

  const theme = useMemo(() => {
    if (!light && !dark && only) {
      return only;
    }
    if (currentColorScheme === "light" && !!light) {
      return light;
    }
    if (currentColorScheme === "dark" && !!dark) {
      return dark;
    }
  }, [currentColorScheme, dark, light, only]);

  const toggle = useCallback(
    () =>
      !dark && !light
        ? console.warn(
            "Cannot toggle without light and dark theme specified at ThemeProvider props"
          )
        : setCurrentColorScheme((latest) =>
            latest === "light" ? "dark" : "light"
          ),
    [dark, light]
  );

  const onPreferencesChanged = useCallback<Appearance.AppearanceListener>(
    ({ colorScheme }) => setCurrentColorScheme(() => colorScheme),
    []
  );

  useEffect(() => {
    if (theme) {
      AndroidNavigationBar.changeColor(
        theme.colors.background,
        !theme.dark,
        true
      );
    }
  }, [theme]);

  useEffect(() => {
    if (observeChanges) {
      Appearance.addChangeListener(onPreferencesChanged);
      return () => Appearance.removeChangeListener(onPreferencesChanged);
    }
  }, [observeChanges, onPreferencesChanged]);

  return (
    <ThemeContext.Provider
      value={{ schema: currentColorScheme, theme: theme!!, toggle }}
    >
      <StyledThemeProvider theme={theme!!}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
