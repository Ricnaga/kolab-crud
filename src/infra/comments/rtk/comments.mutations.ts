import rtkApi from "@/infra/@adapters/redux-toolkit/rtk.api";
import {
  CreateCommentsRequestPayload,
  UpdateCommentsRequestPayload,
} from "../comments.requests";
import { COMMENTS_BYID_ENDPOINT, COMMENTS_ENDPOINT } from "../endpoints";

const postQueriesApi = rtkApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    createComments: build.mutation<void, CreateCommentsRequestPayload>({
      query: (payload) => ({
        url: COMMENTS_ENDPOINT,
        method: "POST",
        body: payload,
      }),
    }),
    updateComments: build.mutation<void, UpdateCommentsRequestPayload>({
      query: ({ commentId, ...payload }) => ({
        url: COMMENTS_BYID_ENDPOINT.replace(":id", commentId),
        method: "PUT",
        body: payload,
      }),
    }),
    removeComments: build.mutation<void, string>({
      query: (commentId) => ({
        url: COMMENTS_BYID_ENDPOINT.replace(":id", commentId),
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateCommentsMutation,
  useRemoveCommentsMutation,
  useUpdateCommentsMutation,
} = postQueriesApi;
