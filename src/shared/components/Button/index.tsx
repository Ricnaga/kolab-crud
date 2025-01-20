import { useButton } from "./use-button.model";
import { ButtonProps } from "./button.types";
import { ButtonView } from "./Button.view";

export function Button(props: ButtonProps) {
  const methods = useButton(props);

  return <ButtonView {...methods} />
}
