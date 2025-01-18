import rtkApi from "@/infra/@adapters/redux-toolkit/rtk.api";
import { POSTS_BYID_ENDPOINT, POSTS_ENDPOINT } from "../endpoints";
import {
  CreatePostsRequestPayload,
  UpdatePostsRequestPayload,
} from "../posts.requests";

const postQueriesApi = rtkApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    createPosts: build.mutation<void, CreatePostsRequestPayload>({
      query: (payload) => ({
        url: POSTS_ENDPOINT,
        method: "POST",
        body: payload,
      }),
    }),
    updatePosts: build.mutation<void, UpdatePostsRequestPayload>({
      query: ({id, ...payload}) => ({
        url: POSTS_BYID_ENDPOINT.replace(":id", id.toString()),
        method: "PUT",
        body: payload,
      }),
    }),
    removePosts: build.mutation<void, string>({
      query: (id) => ({
        url: POSTS_BYID_ENDPOINT.replace(":id", id),
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreatePostsMutation,
  useUpdatePostsMutation,
  useRemovePostsMutation,
} = postQueriesApi;
