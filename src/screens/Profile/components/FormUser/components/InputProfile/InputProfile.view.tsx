import { Field, Input } from "@chakra-ui/react";
import { InputProfileViewProps } from "./Input-profile.types";
import { InputSkeleton } from "./components/InputSkeleton";
import { forwardRef } from "react";

export const InputProfileView = forwardRef<
  HTMLInputElement,
  InputProfileViewProps
>((props, ref) => {
  const { label, isLoading, ...rest } = props;

  if (isLoading) return <InputSkeleton />;

  return (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <Input
        bg={"yellow.50"}
        px={2}
        className="peer"
        placeholder=""
        ref={ref}
        {...rest}
      />
    </Field.Root>
  );
});
