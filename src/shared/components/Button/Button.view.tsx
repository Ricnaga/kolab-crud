import { Button, Spinner } from "@chakra-ui/react";
import { ButtonViewProps } from "./button.types";

export const ButtonView = (props: ButtonViewProps) => {
  const { isLoading, children, isDisabled, ...rest } = props;

  return (
    <Button {...rest} disabled={isDisabled}>
      {isLoading ? <Spinner /> : children}
    </Button>
  );
};
