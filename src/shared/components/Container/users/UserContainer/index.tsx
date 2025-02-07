import { promiseWrapper, request } from "@/infra/@adapters/axios/wrapper";
import { USERS_BYID_ENDPOINT } from "@/infra/users/endpoints";
import {
  UserRequestPayload,
  UserResponse
} from "@/infra/users/users.requests";
import { ResponseType } from "@/shared/types/requests.types";
import { Heading } from "@chakra-ui/react";
import { ReactNode, Suspense, useEffect, useState } from "react";

interface UserPresenterProps extends UserRequestPayload {
  children: (data?: UserResponse) => ReactNode;
}

function UserPresenter(props: UserPresenterProps) {
  const { children, id } = props;
  const [data, setData] = useState<UserResponse | undefined>(undefined);

  useEffect(() => {
    const promise = request<ResponseType<UserResponse>>({
      endpoint: USERS_BYID_ENDPOINT.replace(":id", id),
      method: "GET",
    }).then((response) => response.data);
    setData(promiseWrapper(promise));
  }, [id]);

  return children(data);
}

type UserContainerProps = UserPresenterProps;

export function UserContainer(props: UserContainerProps) {
  const { children, id } = props;

  return (
    <Suspense fallback={<Heading>Carregando usuário</Heading>}>
      <UserPresenter id={id}>{(data) => children(data)}</UserPresenter>
    </Suspense>
  );
}
