import rtkApi from "@/infra/@adapters/redux-toolkit/rtk.api";
import { USERS_BYID_ENDPOINT, USERS_ENDPOINT } from "../endpoints";
import {
  UserRequestPayload,
  UserResponse,
  UsersResponse,
} from "../users.requests";

const userQueriesApi = rtkApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    users: build.query<UsersResponse, void>({
      query: () => ({
        url: USERS_ENDPOINT,
        method: "GET",
      }),
    }),
    user: build.query<UserResponse, UserRequestPayload>({
      query: (payload) => ({
        url: USERS_BYID_ENDPOINT.replace(":id", payload.id),
        method: "GET",
      }),
    }),
  }),
});

export const {
  useUsersQuery,
  useLazyUsersQuery,
  useUserQuery,
  useLazyUserQuery,
} = userQueriesApi;
