import { UseButtonAddPostProps } from "./button-add-post.types";

export const useButtonAddPost = (props: UseButtonAddPostProps) => {
  const { isLoading } = props;

  return { isLoading };
};

export type UseButtonAddPostReturnType = ReturnType<typeof useButtonAddPost>;
