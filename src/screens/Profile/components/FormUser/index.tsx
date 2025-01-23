import { FormUserView } from "./FormUser.view";
import { useFormUser } from "./use-form-user.model";

export function FormUser() {
  const methods = useFormUser();

  return <FormUserView {...methods} />;
}
