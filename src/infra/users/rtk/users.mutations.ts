import rtkApi from "@/infra/@adapters/redux-toolkit/rtk.api";
import { USERS_BYID_ENDPOINT } from "../endpoints";
import { UpdateUserRequestPayload } from "../users.requests";

const usersMutationsApi = rtkApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    updateUser: build.mutation<void, UpdateUserRequestPayload>({
      query: ({ id, ...data }) => ({
        url: USERS_BYID_ENDPOINT.replace(":id", id.toString()),
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useUpdateUserMutation } = usersMutationsApi;
