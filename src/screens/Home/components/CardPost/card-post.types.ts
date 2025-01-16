import { PostsResponse } from "@/infra/posts/posts.requests";

export type CardPostProps = {
  isLoading: boolean;
  data: PostsResponse;
};
