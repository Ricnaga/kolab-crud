import { usePostsQuery } from "@/infra/posts";

export const useHome = () => {
  const { isLoading, data } = usePostsQuery();

  return { isLoading, data };
};

export type UseHomeReturnType = ReturnType<typeof useHome>;
