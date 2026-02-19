import type Help from "./Help";
import { ReactTestInstance } from "./ReactTestInstance";

export default interface Rule {
  id: RuleId;
  matcher: (node: ReactTestInstance) => boolean;
  assertion: (node: ReactTestInstance) => boolean;
  help: Help;
}

export type RuleId =
  | "pressable-role-required"
  | "pressable-accessible-required"
  | "disabled-state-required"
  | "pressable-label-required"
  | "adjustable-role-required"
  | "adjustable-value-required"
  | "link-role-required"
  | "link-role-misused"
  | "no-empty-text"
  | "checked-state-required"
  | "input-label-required"
  | "input-editable-disabled-required"
  | "input-value-exposed";
