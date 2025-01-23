import { DialogAddCommentProps } from "./dialog-add-comment.types";
import { DialogAddCommentView } from "./DialogAddComment.view";
import { useDialogAddComment } from "./use-dialog-add-comment.model";

export function DialogAddComment(props: DialogAddCommentProps) {
  const methods = useDialogAddComment(props);
  return <DialogAddCommentView {...methods} />;
}
