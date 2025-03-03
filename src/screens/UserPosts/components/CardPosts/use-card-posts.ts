import { UseCardPostsProps } from "./card-posts.types";

export const useCardPosts = (props: UseCardPostsProps) => {
  const { data } = props;

  return { data };
};

export type UseCardPostsReturnType = ReturnType<typeof useCardPosts>;
