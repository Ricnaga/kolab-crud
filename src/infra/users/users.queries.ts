import { useQuery } from "@tanstack/react-query";
import {
  userRequest,
  UserRequestPayload,
  usersRequest,
} from "./users.requests";

enum UsersKey {
  USERS = "USERS",
  USER = "USER",
}

export function useUsersQuery() {
  const query = useQuery({
    queryKey: [UsersKey.USERS],
    queryFn: () => usersRequest(),
  });

  return { ...query, data: query.data?.data || [] };
}

export type UseUserQueryProps = UserRequestPayload;

export function useUserQuery(props: UseUserQueryProps) {
  const { id } = props;
  const query = useQuery({
    queryKey: [UsersKey.USER, id],
    queryFn: () => userRequest({ id }),
  });

  return { ...query, data: query.data?.data || null };
}
