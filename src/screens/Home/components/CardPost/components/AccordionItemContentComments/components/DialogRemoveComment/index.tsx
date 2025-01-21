import { DialogRemoveCommentProps } from "./dialog-remove-comment.types";
import { DialogRemoveCommentView } from "./DialogRemoveComment.view";
import { useDialogRemoveComment } from "./use-dialog-remove-comment.model";

export function DialogRemoveComment(props: DialogRemoveCommentProps) {
  const methods = useDialogRemoveComment(props);
  return <DialogRemoveCommentView {...methods} />;
}
