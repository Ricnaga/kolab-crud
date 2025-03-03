import { useNavigate, useParams } from "react-router";

export const useUserPosts = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);
  
  return { handleBack, userId };
};

export type UseUserPostsReturnType = ReturnType<typeof useUserPosts>;
