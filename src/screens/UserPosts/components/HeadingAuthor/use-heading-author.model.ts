import { useUserQuery } from "@/infra/users/rtk";
import { useParams } from "react-router";

export const useHeadingAuthor = () => {
  const { userId = "" } = useParams<{ userId: string }>();

  const { data, isLoading } = useUserQuery({
    id: userId,
  });

  const name = data?.name ?? "Desconhecido";

  return { name, isLoading };
};

export type UseHeadingAuthorReturnType = ReturnType<typeof useHeadingAuthor>;
