import { Checkbox } from "@chakra-ui/react";
import { CheckboxProfileViewProps } from "./checkbox-profile.types";

export const CheckboxProfileView = (props: CheckboxProfileViewProps) => {
  const { label, ...rest } = props;

  return (
    <Checkbox.Root variant="subtle" {...rest}>
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>{label}</Checkbox.Label>
    </Checkbox.Root>
  );
};
