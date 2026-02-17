declare global {
  var __A11Y_RULES__: RuleId[];
  function __CUSTOM_VIOLATION_HANDLER__(violations: Violation[]): Violation[];
}
