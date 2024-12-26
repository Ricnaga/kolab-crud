import { CommentType } from "@/shared/types/global.types";
import { request } from "../@adapters/axios/request";
import { ResponseType } from "@/shared/types/requests.types";
import { COMMENTS_BYID_ENDPOINT, COMMENTS_ENDPOINT } from "./endpoints";

export type CommentsRequestPayload = {
  postId: string;
};

export type CommentsResponse = Array<CommentType>;

export const commentsRequest = async (payload: CommentsRequestPayload) => {
  const response = await request<ResponseType<CommentsResponse>>({
    endpoint: COMMENTS_ENDPOINT,
    method: "GET",
    params: {
      postId: payload.postId,
    },
  });

  return response;
};

export type UpdateCommentsRequestPayload = {
  data: Omit<CommentType, "id">;
  commentId: string;
};

export const updateCommentsRequest = async (
  payload: UpdateCommentsRequestPayload
) => {
  const { commentId, data } = payload;

  const response = await request<void, UpdateCommentsRequestPayload["data"]>({
    endpoint: COMMENTS_BYID_ENDPOINT.replace(":id", commentId),
    method: "PUT",
    data,
  });

  return response;
};

export const deleteCommentsRequest = async (commentId: string) => {
  const response = await request<void, UpdateCommentsRequestPayload["data"]>({
    endpoint: COMMENTS_BYID_ENDPOINT.replace(":id", commentId),
    method: "DELETE",
  });

  return response;
};
