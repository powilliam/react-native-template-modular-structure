import React from "react";

import { render } from "app/shared/utils";

import { AppModule } from "app/app-module";

describe("AppModule", () => {
  it("should be able to render a hello world message", () => {
    const { getByText } = render(<AppModule />);

    expect(getByText("Hello World")).toBeTruthy();
  });
});
