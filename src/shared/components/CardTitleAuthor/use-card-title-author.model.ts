import { useUserQuery } from "@/infra/users/react-query";
import { UseCardTitleAuthorProps } from "./card-title-author.types";

export const AUTHOR_NAME_DEFAULT = "Desconhecido";

export const useCardTitleAuthor = (props: UseCardTitleAuthorProps) => {
  const { userId } = props;

  const { data, isLoading } = useUserQuery({ id: userId });

  const authorName = data?.name || AUTHOR_NAME_DEFAULT;

  return { authorName, isLoading };
};

export type UseCardTitleAuthorReturnType = ReturnType<
  typeof useCardTitleAuthor
>;
