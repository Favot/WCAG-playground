import Slider from "@react-native-community/slider";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import rule from ".";
import TestAssets from "../../__tests__/assets";
import check from "../../engine";

const run = (component: React.ReactElement<any>) => {
  return check(component, { rules: [rule.id] });
};

describe("buttons", () => {
  describe("if the disabled prop is not defined", () => {
    it("throws if 'accessibilityState' prop not defined", () => {
      const Button = () => (
        <TouchableOpacity>
          <Image source={TestAssets.heart["32px"]} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).not.toThrow(rule.help.problem);
    });

    it("throws if 'accessibilityState' prop equals empty object'", () => {
      const Button = () => (
        <TouchableOpacity accessibilityState={{}}>
          <Image source={TestAssets.heart["32px"]} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).not.toThrow(rule.help.problem);
    });

    it("throws if 'accessibilityState' prop equals an object that doesn't contain 'disabled' key", () => {
      const Button = () => (
        <TouchableOpacity accessibilityState={{ expanded: true }}>
          <Image source={TestAssets.heart["32px"]} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).not.toThrow(rule.help.problem);
    });
  });

  describe("if the disabled prop is defined", () => {
    it("throws if 'accessibilityState' prop not defined", () => {
      const Button = () => (
        <TouchableOpacity disabled={false}>
          <Image source={TestAssets.heart["32px"]} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).toThrow(rule.help.problem);
    });

    it("throws if 'accessibilityState' prop equals empty object'", () => {
      const Button = () => (
        <TouchableOpacity disabled={false} accessibilityState={{}}>
          <Image source={TestAssets.heart["32px"]} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).toThrow(rule.help.problem);
    });

    it("throws if 'accessibilityState' prop equals an object that doesn't contain 'disabled' key", () => {
      const Button = () => (
        <TouchableOpacity disabled={false} accessibilityState={{ expanded: true }}>
          <Image source={TestAssets.heart["32px"]} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).toThrow(rule.help.problem);
    });

    it("doesn't throw if 'accessibilityState' equals an object that contains the 'disabled = true' key-value pair", () => {
      const Button = () => (
        <TouchableOpacity disabled={false} accessibilityState={{ disabled: true }}>
          <Image source={TestAssets.heart["32px"]} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).not.toThrow(rule.help.problem);
    });

    it("doesn't throw if 'accessibilityState' equals an object that contains the 'disabled = false' key-value pair", () => {
      const Button = () => (
        <TouchableOpacity disabled={false} accessibilityState={{ disabled: false }}>
          <Image source={TestAssets.heart["32px"]} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).not.toThrow(rule.help.problem);
    });
  });
});

describe("sliders", () => {
  describe("if disabled prop is defined", () => {
    it("doesn't throw if 'accessibilityState' prop not defined", () => {
      const Wrapper = () => <Slider disabled />;
      expect(() => run(<Wrapper />)).not.toThrow(rule.help.problem);
    });

    it("doesn't throw if 'accessibilityState' prop equals empty object'", () => {
      const Wrapper = () => <Slider disabled accessibilityState={{}} />;
      expect(() => run(<Wrapper />)).not.toThrow(rule.help.problem);
    });

    it("doesn't throw if 'accessibilityState' prop equals an object that doesn't contain 'disabled' key", () => {
      const Wrapper = () => <Slider disabled accessibilityState={{ expanded: true }} />;

      expect(() => run(<Wrapper />)).not.toThrow(rule.help.problem);
    });

    it("doesn't throw if 'accessibilityState' equals an object that contains the 'disabled = true' key-value pair", () => {
      const Wrapper = () => <Slider disabled accessibilityState={{ disabled: true }} />;

      expect(() => run(<Wrapper />)).not.toThrow(rule.help.problem);
    });

    it("doesn't throw if 'accessibilityState' equals an object that contains the 'disabled = false' key-value pair", () => {
      const Wrapper = () => <Slider disabled={false} accessibilityState={{ disabled: false }} />;
      expect(() => run(<Wrapper />)).not.toThrow(rule.help.problem);
    });
  });
});
