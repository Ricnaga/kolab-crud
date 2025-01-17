import { Field, Input } from "@chakra-ui/react";
import { UseInputProfileViewProps } from "./Input-profile.types";

export const InputProfileView = (props: UseInputProfileViewProps) => {
  const { label, ...rest } = props;
  
  return (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <Input
        bg={"yellow.50"}
        px={2}
        className="peer"
        placeholder=""
        {...rest}
      />
    </Field.Root>
  );
};
