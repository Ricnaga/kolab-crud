import rtkApi from "@/infra/@adapters/redux-toolkit/rtk.api";
import { ResponseType } from "@/shared/types/requests.types";
import { POSTS_ENDPOINT } from "../endpoints";
import {
  PostsRequestPayload,
  PostsResponse
} from "../posts.requests";

const postQueriesApi = rtkApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    posts: build.query<ResponseType<PostsResponse>, PostsRequestPayload>({
      query: (payload) => ({
        url: POSTS_ENDPOINT,
        method: "GET",
        params: payload,
      }),
    }),
  }),
});

export const { usePostsQuery, useLazyPostsQuery } = postQueriesApi;
