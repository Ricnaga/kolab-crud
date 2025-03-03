import { PostsResponse } from "@/infra/posts/posts.requests";
import { UseCardPostsReturnType } from "./use-card-posts";

export type UseCardPostsProps = {
  data: PostsResponse;
};

export type CardPostsProps = UseCardPostsProps;

export type CardPostsViewProps = UseCardPostsReturnType;
