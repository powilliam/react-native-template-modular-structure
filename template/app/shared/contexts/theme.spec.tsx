import React from "react";
import { Text, Appearance } from "react-native";

import { ThemeConsumer } from "app/shared/contexts";
import { light, dark } from "app/shared/themes";
import { render } from "app/shared/utils";

const TestableComponent = () => (
  <ThemeConsumer>
    {({ theme }) => <Text>{theme.colors.primary}</Text>}
  </ThemeConsumer>
);

describe("Theme Context", () => {
  it("should be able to share light ui theme", () => {
    jest.spyOn(Appearance, "getColorScheme").mockImplementation(() => "light");

    const { getByText } = render(<TestableComponent />);
    expect(getByText(light.colors.primary)).toBeTruthy();
  });

  it("should be able to share dark ui theme", () => {
    jest.spyOn(Appearance, "getColorScheme").mockImplementation(() => "dark");

    const { getByText } = render(<TestableComponent />);
    expect(getByText(dark.colors.primary)).toBeTruthy();
  });

  it("should be able to share fallback ui theme", () => {
    jest.spyOn(Appearance, "getColorScheme").mockImplementation(() => null);

    const { getByText } = render(<TestableComponent />);
    expect(getByText(light.colors.primary)).toBeTruthy();
  });
});
