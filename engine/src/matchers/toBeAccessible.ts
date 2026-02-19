import type { ReactElement } from "react";
import check from "../engine";
import type { Options } from "../engine/index";
import { generateMatcherError } from "../utils";

export default function toBeAccessible(
  this: jest.MatcherContext,
  received: ReactElement,
  options?: Options,
) {
  const jestGlobalConfigs = {
    rules: global.__A11Y_RULES__,
    customViolationHandler: global.__CUSTOM_VIOLATION_HANDLER__,
  };

  const violations = check(received, {
    ...jestGlobalConfigs,
    ...options,
    returnViolations: true,
  });

  if (violations.length) {
    const message = generateMatcherError(violations, this.isNot);
    return {
      pass: false,
      message: () => message,
    };
  }

  return {
    pass: true,
    message() {
      return "Component is accessible.\nDoes it make sense to test a component for NOT being accessible?";
    },
  };
}
