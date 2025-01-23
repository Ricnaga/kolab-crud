import { FormCommentProps } from "./form-comment.types";
import { FormCommentView } from "./FormComment.view";
import { useFormComment } from "./use-form-comment.model";

export function FormComment(props: FormCommentProps) {
  const methods = useFormComment(props);
  return <FormCommentView {...methods} />;
}
