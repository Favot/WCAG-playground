import { render } from "@testing-library/react-native";
import * as React from "react";
import { Text } from "react-native";

describe("smoke test", () => {
  it("renders a text node", () => {
    const { getByText } = render(<Text>Jest + RTL ready</Text>);
    expect(getByText("Jest + RTL ready")).toBeTruthy();
  });
});
