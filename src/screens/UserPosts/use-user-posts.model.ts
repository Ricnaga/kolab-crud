import { useNavigate } from "react-router";

export const useUserPosts = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);
  
  return { handleBack };
};

export type UseUserPostsReturnType = ReturnType<typeof useUserPosts>;
