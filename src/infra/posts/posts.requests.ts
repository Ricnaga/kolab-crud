import { PostType } from "@/shared/types/global.types";
import { request } from "../@adapters/axios/request";
import { POSTS_BYID_ENDPOINT, POSTS_ENDPOINT } from "./endpoints";
import { ResponseType } from "@/shared/types/requests.types";

export type PostsRequestPayload = {
  userId?: string;
};

export type PostsResponse = Array<PostType>;

export const postsRequest = async (payload?: PostsRequestPayload) => {
  const response = await request<ResponseType<PostsResponse>>({
    endpoint: POSTS_ENDPOINT,
    method: "GET",
    params: payload,
  });

  return response;
};

export type CreatePostsRequestPayload = Pick<PostType, "body" | "title">;

export const createPostsRequest = async (
  payload: CreatePostsRequestPayload
) => {
  const response = await request<void, CreatePostsRequestPayload>({
    endpoint: POSTS_ENDPOINT,
    method: "POST",
    data: payload,
  });

  return response;
};

export type UpdatePostsRequestPayload = PostType;

export const updatePostsRequest = async (
  payload: UpdatePostsRequestPayload
) => {
  const { id, ...rest } = payload;
  const response = await request<void, Omit<UpdatePostsRequestPayload, "id">>({
    endpoint: POSTS_BYID_ENDPOINT.replace(":id", id.toString()),
    method: "POST",
    data: rest,
  });

  return response;
};

export const removePostsRequest = async (id: string) => {
  const response = await request<void, Omit<void, "id">>({
    endpoint: POSTS_BYID_ENDPOINT.replace(":id", id.toString()),
    method: "DELETE",
  });

  return response;
};
