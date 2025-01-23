import { forwardRef } from "react";
import { InputProfileProps } from "./Input-profile.types";
import { InputProfileView } from "./InputProfile.view";
import { useInputProfile } from "./use-Input-profile.model";

export const InputProfile = forwardRef<HTMLInputElement, InputProfileProps>(
  (props, ref) => {
    const methods = useInputProfile({ ...props, ref });

    return <InputProfileView {...methods} />;
  }
);
