import React from "react";
import { render } from "@testing-library/react-native";

import { AppModule } from "app/app-module";

describe("AppModule", () => {
  it("should be able to render a hello world message", () => {
    const { getByText } = render(<AppModule />);

    expect(getByText("Hello World")).toBeTruthy();
  });
});
