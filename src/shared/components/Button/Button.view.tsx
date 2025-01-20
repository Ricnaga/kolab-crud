import { Button } from "@chakra-ui/react";
import { ButtonViewProps } from "./button.types";

export const ButtonView = (props: ButtonViewProps) => {
  const { isLoading, ...rest } = props;

  return <Button disabled={isLoading} {...rest} />;
};
