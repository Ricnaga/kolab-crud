import { InputProfileProps } from "./Input-profile.types";
import { InputProfileView } from "./InputProfile.view";
import { useInputProfile } from "./use-Input-profile.model";

export function InputProfile(props: InputProfileProps) {
  const methods = useInputProfile(props);

  return <InputProfileView {...methods} />;
}
