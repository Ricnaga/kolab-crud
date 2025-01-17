import { UseCardPostProps } from "./card-post.types";

export const useCardPost = (props: UseCardPostProps) => {
  const { isLoading, data } = props;

  return { isLoading, data };
};

export type UseCardPostReturnType = ReturnType<typeof useCardPost>;
