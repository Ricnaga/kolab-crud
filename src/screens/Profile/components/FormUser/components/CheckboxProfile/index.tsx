import { CheckboxProfileProps } from "./checkbox-profile.types";
import { CheckboxProfileView } from "./CheckboxProfile.view";
import { useCheckboxProfile } from "./use-checkbox-profile.model";

export function CheckboxProfile(props: CheckboxProfileProps) {
  const methods = useCheckboxProfile(props);

  return <CheckboxProfileView {...methods} />;
}
