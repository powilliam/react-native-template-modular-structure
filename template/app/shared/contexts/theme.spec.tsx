import React from "react";
import ReactNative, { Text } from "react-native";
import { render } from "@testing-library/react-native";
import { ThemeConsumer } from "styled-components/native";

import { ThemeProvider } from "app/shared/contexts/theme";

import { light } from "app/shared/themes/light";
import { dark } from "app/shared/themes/dark";

const TestableComponent = () => (
  <ThemeProvider theme={{ light, dark, fallback: light }}>
    <ThemeConsumer>
      {(theme) => <Text>{theme.colors.primary}</Text>}
    </ThemeConsumer>
  </ThemeProvider>
);

describe("Theme Context", () => {
  it("should be able to share light ui theme", () => {
    jest.spyOn(ReactNative, "useColorScheme").mockImplementation(() => "light");

    const { getByText } = render(<TestableComponent />);
    expect(getByText(light.colors.primary)).toBeTruthy();
  });

  it("should be able to share dark ui theme", () => {
    jest.spyOn(ReactNative, "useColorScheme").mockImplementation(() => "dark");

    const { getByText } = render(<TestableComponent />);
    expect(getByText(dark.colors.primary)).toBeTruthy();
  });

  it("should be able to share fallback ui theme", () => {
    jest.spyOn(ReactNative, "useColorScheme").mockImplementation(() => null);

    const { getByText } = render(<TestableComponent />);
    expect(getByText(light.colors.primary)).toBeTruthy();
  });
});
