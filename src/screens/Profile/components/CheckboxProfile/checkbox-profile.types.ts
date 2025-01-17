import { ComponentProps } from "react";
import { UseCheckboxProfileReturnType } from "./use-checkbox-profile.model";
import { CheckboxRoot } from "@chakra-ui/react";

export interface UseCheckboxProfileProps
  extends Omit<ComponentProps<typeof CheckboxRoot>, "variant"> {
  label: string;
}

export type CheckboxProfileViewProps = UseCheckboxProfileProps;
export type CheckboxProfileProps = UseCheckboxProfileReturnType;
