import { type ComponentChildren, createContext } from "preact";
import type { Constraints } from "../lib/solver";

const Constraint = createContext<Constraints>(null);

export const ConstraintProvider = ({
  children,
}: {
  children: ComponentChildren;
}) => {
  return (
    <Constraint.Provider
      value={{ absent: [], present: [], incorrect: {}, correct: {} }}
    >
      {children}
    </Constraint.Provider>
  );
};
