import React from "react";
import { Text } from "react-native";

import { View } from "app/shared/components/view";
import { render } from "app/shared/utils";

describe("View Component", () => {
  it("should be able to render", () => {
    const { findByTestId } = render(<View testID="view-component" />);

    expect(findByTestId("view-component")).toBeTruthy();
  });

  it("should be able to render within a text", () => {
    const { getByText } = render(
      <View>
        <Text>Hello World</Text>
      </View>
    );

    expect(getByText("Hello World")).toBeTruthy();
  });
});
