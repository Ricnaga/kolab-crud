import { Button } from "@components/Button";
import { ButtonAddPostViewProps } from "./button-add-post.types";
import { DialogAddPost } from "./components/DialogAddPost";

export const ButtonAddPostView = (props: ButtonAddPostViewProps) => {
  const { isLoading } = props;
  return (
    <DialogAddPost>
      <Button isLoading={isLoading}>Adicionar Post</Button>
    </DialogAddPost>
  );
};
