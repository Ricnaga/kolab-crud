import { userValue } from "@/contexts/RTK/features/user/user.slice";
import { useAppSelector } from "@/contexts/RTK/store";
import { useUserQuery } from "@/infra/users/react-query";
import { UseCardTitleAuthorProps } from "./card-title-author.types";

export const AUTHOR_NAME_DEFAULT = "Desconhecido";

export const useCardTitleAuthor = (props: UseCardTitleAuthorProps) => {
  const { userId, handleNavigate } = props;

  const { data, isLoading } = useUserQuery({ id: userId });

  const user = useAppSelector(userValue);

  const isUserCreator = user.id.toString() === userId;

  const userCreatorName = isUserCreator ? user.name : AUTHOR_NAME_DEFAULT;

  const authorName = data?.name || userCreatorName;

  return { authorName, isLoading, handleNavigate };
};

export type UseCardTitleAuthorReturnType = ReturnType<
  typeof useCardTitleAuthor
>;
