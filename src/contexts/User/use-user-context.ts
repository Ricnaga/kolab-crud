import useContext from "@/shared/hooks/useContext";
import { createContext } from "react";

export function useUserProvider() {
  return {};
}

export type UseUserProviderReturnType = ReturnType<typeof useUserProvider>;

export const UserContext = createContext({} as UseUserProviderReturnType);

function useUserContext() {
  return useContext({
    context: UserContext,
    hookName: useUserContext.name,
    providerName: "User",
  });
}

export default useUserContext;
