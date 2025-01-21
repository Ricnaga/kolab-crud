import { useUserQuery } from "@/infra/users/react-query";
import { UseCardTitleAuthorProps } from "./card-title-author.types";
import { useNavigate } from "react-router";
import { USER_BYUSER_ID_POSTS } from "@application/router/paths";
import { useAppSelector } from "@/contexts/RTK/store";
import { userValue } from "@/contexts/RTK/features/user/user.slice";

export const AUTHOR_NAME_DEFAULT = "Desconhecido";

export const useCardTitleAuthor = (props: UseCardTitleAuthorProps) => {
  const navigate = useNavigate();
  const { userId } = props;

  const { data, isLoading } = useUserQuery({ id: userId });
  const user = useAppSelector(userValue);

  const isUserCreator = user.id.toString() === userId;

  const userCreatorName = isUserCreator ? user.name : AUTHOR_NAME_DEFAULT;

  const authorName = data?.name || userCreatorName;

  const handleNextPage = () =>
    navigate(USER_BYUSER_ID_POSTS.replace(":userId", userId));

  return { authorName, isLoading, handleNextPage };
};

export type UseCardTitleAuthorReturnType = ReturnType<
  typeof useCardTitleAuthor
>;
