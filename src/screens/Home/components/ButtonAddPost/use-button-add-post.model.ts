import { UseButtonAddPostProps } from "./button-add-post.types";

export const useButtonAddPost = (props: UseButtonAddPostProps) => {
  const { isLoading } = props;

  return { isLoading, open };
};

export type UseButtonAddPostReturnType = ReturnType<typeof useButtonAddPost>;
