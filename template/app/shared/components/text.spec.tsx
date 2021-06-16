import React from "react";
import { View } from "react-native";

import { Text } from "app/shared/components/text";
import { render } from "app/shared/utils";

describe("Text Component", () => {
  it("should be able to render", () => {
    const { getByText } = render(
      <View>
        <Text>Hello World</Text>
      </View>
    );

    expect(getByText("Hello World")).toBeTruthy();
  });
});
