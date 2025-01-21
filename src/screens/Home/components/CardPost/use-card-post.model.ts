import { useNavigate } from "react-router";
import { UseCardPostProps } from "./card-post.types";
import { USER_BYUSER_ID_POSTS } from "@application/router/paths";

export const useCardPost = (props: UseCardPostProps) => {
  const { isLoading, data } = props;
  const navigate = useNavigate();

  const handleNextPage = (userId: string) =>
    navigate(USER_BYUSER_ID_POSTS.replace(":userId", userId));

  return { isLoading, data, handleNextPage };
};

export type UseCardPostReturnType = ReturnType<typeof useCardPost>;
