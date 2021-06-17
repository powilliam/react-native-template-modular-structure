import React, { ReactElement } from "react";
import { render as rn, RenderOptions } from "@testing-library/react-native";

import { ThemeProvider } from "app/shared/contexts";
import { light, dark } from "app/shared/themes";

export * from "@testing-library/react-native";

function MockThemeProvider({ children }: { children: ReactElement }) {
  return (
    <ThemeProvider light={light} dark={dark} observeChanges={false}>
      {children}
    </ThemeProvider>
  );
}

export function render<T = {}>(ui: ReactElement<T>, options?: RenderOptions) {
  return rn(ui, { ...options, wrapper: MockThemeProvider });
}
