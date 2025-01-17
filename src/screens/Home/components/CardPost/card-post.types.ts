import { PostsResponse } from "@/infra/posts/posts.requests";
import { UseCardPostReturnType } from "./use-card-post.model";

export type UseCardPostProps = {
  isLoading: boolean;
  data: PostsResponse;
};

export type CardPostProps = UseCardPostProps;
export type CardPostViewProps = UseCardPostReturnType;
