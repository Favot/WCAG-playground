import type { ReactTestInstance } from "../types/ReactTestInstance";

const isFunctionalComponent = (component: ReactTestInstance): boolean => {
  return typeof component.type === "function";
};

export default isFunctionalComponent;
