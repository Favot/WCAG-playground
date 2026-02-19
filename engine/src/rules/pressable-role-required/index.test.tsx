import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import rule from ".";
import TestAssets from "../../__tests__/assets";
import check from "../../engine";

const run = (component: React.ReactElement<any>) => {
  return check(component, { rules: [rule.id] });
};

// To inspect these components, run the example app under "Rules -> Button Role"

describe("pressable role required", () => {
  it("throws if 'accessibilityRole' prop not defined", () => {
    const Button = () => (
      <TouchableOpacity>
        <Image source={TestAssets.heart["32px"]} />
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).toThrow(rule.help.problem);
  });

  it("throws if 'accessibilityRole' prop has a value other than 'button', 'link', 'imagebutton', 'radio', or 'tab'", () => {
    const Button = () => (
      <TouchableOpacity accessibilityRole={"text"}>
        <Image source={TestAssets.heart["32px"]} />
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).toThrow(rule.help.problem);
  });

  it("doesn't throw if 'accessibilityRole' prop has the value 'button'", () => {
    const Button = () => (
      <TouchableOpacity accessibilityRole={"button"}>
        <Image source={TestAssets.heart["32px"]} />
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).not.toThrow(rule.help.problem);
  });

  it("doesn't throw if 'accessibilityRole' prop has the value 'link'", () => {
    const Button = () => (
      <TouchableOpacity accessibilityRole={"link"}>
        <Text>This is a link.</Text>
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).not.toThrow(rule.help.problem);
  });

  it("doesn't throw if 'accessibilityRole' prop has the value 'imagebutton'", () => {
    const Button = () => (
      <TouchableOpacity accessibilityRole={"imagebutton"}>
        <Image source={TestAssets.heart["32px"]} />
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).not.toThrow(rule.help.problem);
  });

  it("doesn't throw if 'accessibilityRole' prop has the value 'radio'", () => {
    const Button = () => (
      <TouchableOpacity accessibilityRole={"radio"}>
        <Image source={TestAssets.heart["32px"]} />
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).not.toThrow(rule.help.problem);
  });

  it("doesn't throw if 'accessibilityRole' prop has the value 'tab'", () => {
    const Button = () => (
      <TouchableOpacity accessibilityRole={"tab"}>
        <Image source={TestAssets.heart["32px"]} />
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).not.toThrow(rule.help.problem);
  });
});
