import { usePostsQuery } from "@/infra/posts/rtk";
import { useParams } from "react-router";

export const useCardPosts = () => {
  const { userId } = useParams<{ userId: string }>();

  const { isLoading, data } = usePostsQuery({ userId });

  return { isLoading, data };
};

export type UseCardPostsReturnType = ReturnType<typeof useCardPosts>;
