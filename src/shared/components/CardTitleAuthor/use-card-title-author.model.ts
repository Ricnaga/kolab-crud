import { useUserQuery } from "@/infra/users/react-query";
import { UseCardTitleAuthorProps } from "./card-title-author.types";

export const useCardTitleAuthor = (props: UseCardTitleAuthorProps) => {
  const { userId } = props;

  const { data, isLoading } = useUserQuery({ id: userId });

  const authorName = data?.name || "Desconhecido";

  return { authorName, isLoading };
};

export type UseCardTitleAuthorReturnType = ReturnType<
  typeof useCardTitleAuthor
>;
