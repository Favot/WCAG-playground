import React from "react";
import { View } from "react-native";
import isReactTestInstance from "./isReactTestInstance";
import { render as renderNative } from "@testing-library/react-native";

it("should return false when passed a React element", () => {
  expect(isReactTestInstance(React.createElement(View))).toBe(false);
});

it("should return true when passed a ReactTestInstance from @testing-library/react-native", () => {
  const { getByTestId } = renderNative(React.createElement(View, { testID: "view" }));
  expect(isReactTestInstance(getByTestId("view"))).toBe(true);
});
