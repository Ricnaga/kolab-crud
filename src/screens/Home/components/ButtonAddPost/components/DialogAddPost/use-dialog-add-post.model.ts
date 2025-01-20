import { UseDialogAddPostProps } from "./dialog-add-post.types";

export const useDialogAddPost = (props: UseDialogAddPostProps) => {
  const { children } = props;

  return { children };
};

export type UseDialogAddPostReturnType = ReturnType<typeof useDialogAddPost>;
