import rtkApi from "@/infra/@adapters/redux-toolkit/rtk.api";
import { COMMENTS_ENDPOINT } from "../endpoints";
import { CommentsRequestPayload, CommentsResponse } from "../comments.requests";

const commentsQueriesApi = rtkApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    comments: build.query<CommentsResponse, CommentsRequestPayload>({
      query: (payload) => ({
        url: COMMENTS_ENDPOINT,
        method: "GET",
        params: payload,
      }),
    }),
  }),
});

export const { useCommentsQuery, useLazyCommentsQuery } = commentsQueriesApi;
