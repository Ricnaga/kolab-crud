import { UserType } from "@/shared/types/global.types";
import { request } from "../@adapters/axios/request";
import { USERS_BYID_ENDPOINT, USERS_ENDPOINT } from "./endpoints";
import { ResponseType } from "@/shared/types/requests.types";

export type UsersResponse = Array<UserType>;

export const usersRequest = async () => {
  const response = await request<ResponseType<UsersResponse>>({
    endpoint: USERS_ENDPOINT,
    method: "GET",
  });

  return response;
};

export type UserRequestPayload = { id: string };
export type UserResponse = UserType;

export const userRequest = async (payload: UserRequestPayload) => {
  const response = await request<ResponseType<UserResponse>>({
    endpoint: USERS_BYID_ENDPOINT.replace(":id", payload.id),
    method: "GET",
  });

  return response;
};

export type UpdateUserRequestPayload = UserType;

export const updateUserRequest = async (payload: UpdateUserRequestPayload) => {
  const { id, ...rest } = payload;
  const response = await request<void, Omit<UpdateUserRequestPayload, "id">>({
    endpoint: USERS_BYID_ENDPOINT.replace(":id", id.toString()),
    method: "PUT",
    data: rest,
  });

  return response;
};
