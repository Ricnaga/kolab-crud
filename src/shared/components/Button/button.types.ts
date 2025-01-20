import { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { UseButtonReturnType } from "./use-button.model";

export interface UseButtonProps extends ChakraButtonProps {
  isLoading?: boolean;
}

export type ButtonProps = UseButtonProps;
export type ButtonViewProps = UseButtonReturnType;
