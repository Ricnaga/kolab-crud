import { DialogRemovePostProps } from "./dialog-remove-post.types";
import { DialogRemovePostView } from "./DialogRemovePost.view";
import { useDialogRemovePost } from "./use-dialog-remove-post.model";

export function DialogRemovePost(props: DialogRemovePostProps) {
  const methods = useDialogRemovePost(props);
  return <DialogRemovePostView {...methods} />;
}
