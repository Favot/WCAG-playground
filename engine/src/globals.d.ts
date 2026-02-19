import type { RuleId } from "./types/Rule";
import type Violation from "./types/Violation";

declare global {
  var __A11Y_RULES__: RuleId[] | undefined;
  var __CUSTOM_VIOLATION_HANDLER__: ((violations: Violation[]) => Violation[]) | undefined;
}

export {};
