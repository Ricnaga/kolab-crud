import { FormPostProps } from "./form-post.types";
import { FormPostView } from "./FormPost.view";
import { useFormPost } from "./use-form-post.model";

export function FormPost(props: FormPostProps) {
  const methods = useFormPost(props);
  return <FormPostView {...methods} />;
}
