import { ComponentProps } from "react";
import { UseInputProfileReturnType } from "./use-Input-profile.model";
import { Input } from "@chakra-ui/react";

export interface UseInputProfileProps extends ComponentProps<typeof Input> {
  label: string;
  isLoading?: boolean;
}

export type InputProfileViewProps = UseInputProfileProps;
export type InputProfileProps = UseInputProfileReturnType;
