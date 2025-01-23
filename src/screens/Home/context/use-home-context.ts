import { userValue } from "@/contexts/RTK/features/user/user.slice";
import { useAppSelector } from "@/contexts/RTK/store";
import useContext from "@/shared/hooks/useContext";
import { createContext } from "react";

export function useHomeProvider() {
  const user = useAppSelector(userValue);
  const handlePostCreator = (userId: number) => user.id === userId;

  return { handlePostCreator, user };
}

export type UseHomeProviderReturnType = ReturnType<typeof useHomeProvider>;

export const HomeContext = createContext({} as UseHomeProviderReturnType);

function useHomeContext() {
  return useContext({
    context: HomeContext,
    hookName: useHomeContext.name,
    providerName: "User",
  });
}

export default useHomeContext;
