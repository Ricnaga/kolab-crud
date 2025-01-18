import rtkApi from "@/infra/@adapters/redux-toolkit/rtk.api";
import { UpdateCommentsRequestPayload } from "../comments.requests";
import { COMMENTS_BYID_ENDPOINT } from "../endpoints";
import { POSTS_BYID_ENDPOINT } from "@/infra/posts/endpoints";

const postQueriesApi = rtkApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    updateComments: build.mutation<void, UpdateCommentsRequestPayload>({
      query: ({ commentId, ...payload }) => ({
        url: COMMENTS_BYID_ENDPOINT.replace(":id", commentId),
        method: "PUT",
        body: payload,
      }),
    }),
    removeComments: build.mutation<void, string>({
      query: (commentId) => ({
        url: POSTS_BYID_ENDPOINT.replace(":id", commentId),
        method: "DELETE",
      }),
    }),
  }),
});

export const { useRemoveCommentsMutation, useUpdateCommentsMutation } =
  postQueriesApi;
