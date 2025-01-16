import { useUserQuery } from "@/infra/users";
import { UseCardTitleAuthorProps } from "./card-title-author.types";
import { useNavigate } from "react-router";
import { USER_BYUSER_ID_POSTS } from "@application/router/paths";

export const useCardTitleAuthor = (props: UseCardTitleAuthorProps) => {
  const navigate = useNavigate();
  const { userId } = props;

  const { data, isLoading } = useUserQuery({ id: userId });

  const authorName = data?.name || "Desconhecido";

  const handleNextPage = () =>
    navigate(USER_BYUSER_ID_POSTS.replace(":userId", userId));

  return { authorName, isLoading, handleNextPage };
};

export type UseCardTitleAuthorReturnType = ReturnType<
  typeof useCardTitleAuthor
>;
