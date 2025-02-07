import { promiseWrapper, request } from "@/infra/@adapters/axios/wrapper";
import { USERS_ENDPOINT } from "@/infra/users/endpoints";
import { UsersResponse } from "@/infra/users/users.requests";
import { ResponseType } from "@/shared/types/requests.types";
import { Heading } from "@chakra-ui/react";
import { ReactNode, Suspense, useEffect, useState } from "react";

type UsersPresenterProps = {
  children: (data?: UsersResponse) => ReactNode;
};

function UsersPresenter(props: UsersPresenterProps) {
  const { children } = props;
  const [data, setData] = useState<UsersResponse | undefined>(undefined);

  useEffect(() => {
    const promise = request<ResponseType<UsersResponse>>({
      endpoint: USERS_ENDPOINT,
      method: "GET",
    }).then((response) => response.data);

    setData(promiseWrapper(promise));
  }, []);

  return children(data);
}

type UsersContainerProps = UsersPresenterProps;

export function UsersContainer(props: UsersContainerProps) {
  const { children } = props;

  return (
    <Suspense fallback={<Heading>Carregando usuários</Heading>}>
      <UsersPresenter>{(data) => children(data)}</UsersPresenter>
    </Suspense>
  );
}
