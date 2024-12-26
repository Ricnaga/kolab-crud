import { useQuery } from "@tanstack/react-query";
import { postsRequest, PostsRequestPayload } from "../posts/posts.requests";

export enum PostsKey {
  POSTS = "POSTS",
}

type UsePostsQueryProps = PostsRequestPayload;

export function usePostsQuery(props: UsePostsQueryProps = {}) {
  const { userId } = props;

  const query = useQuery({
    queryKey: [PostsKey.POSTS, userId],
    queryFn: () => postsRequest({ userId }),
  });

  return { ...query, data: query.data?.data || [] };
}
