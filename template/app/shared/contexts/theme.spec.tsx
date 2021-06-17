import React from "react";
import { Text, Appearance } from "react-native";

import { ThemeProvider, ThemeConsumer } from "app/shared/contexts";
import { light, dark } from "app/shared/themes";
import { render } from "app/shared/utils";

const Consumer = () => (
  <ThemeConsumer>
    {({ theme }) => <Text testID="primary-color">{theme.colors.primary}</Text>}
  </ThemeConsumer>
);

const WithMultiTheme = () => (
  <ThemeProvider light={light} dark={dark}>
    <Consumer />
  </ThemeProvider>
);

const WithSingleTheme = () => (
  <ThemeProvider only={light}>
    <Consumer />
  </ThemeProvider>
);

describe("Theme Context", () => {
  it("should be able to share light ui theme", () => {
    jest.spyOn(Appearance, "getColorScheme").mockImplementation(() => "light");
    const { getByText } = render(<WithMultiTheme />);

    expect(getByText(light.colors.primary)).toBeTruthy();
  });

  it("should be able to share dark ui theme", () => {
    jest.spyOn(Appearance, "getColorScheme").mockImplementation(() => "dark");
    const { getByText } = render(<WithMultiTheme />);

    expect(getByText(dark.colors.primary)).toBeTruthy();
  });

  it("should be able to share a light as single theme", () => {
    const { getByText } = render(<WithSingleTheme />);

    expect(getByText(light.colors.primary)).toBeTruthy();
  });
});
