import { ButtonAddPostProps } from "./button-add-post.types";
import { ButtonAddPostView } from "./ButtonAddPost.view";
import { useButtonAddPost } from "./use-button-add-post.model";

export function ButtonAddPost(props: ButtonAddPostProps) {
  const methods = useButtonAddPost(props);

  return <ButtonAddPostView {...methods} />;
}
