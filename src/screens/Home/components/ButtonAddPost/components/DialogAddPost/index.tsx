import { DialogAddPostProps } from "./dialog-add-post.types";
import { DialogAddPostView } from "./DialogAddPost.view";
import { useDialogAddPost } from "./use-dialog-add-post.model";

export function DialogAddPost(props: DialogAddPostProps) {
  const methods = useDialogAddPost(props);
  return <DialogAddPostView {...methods} />;
}
