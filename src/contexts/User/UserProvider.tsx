import { ProviderProps, ReactNode } from "react";
import {
  UserContext,
  useUserProvider,
  UseUserProviderReturnType,
} from "./use-user-context";

function UserProvider(props: { children: ReactNode }) {
  const value = useUserProvider();

  const contextProps: ProviderProps<UseUserProviderReturnType> = {
    ...props,
    value,
  };
  return <UserContext.Provider {...contextProps} />;
}

export default UserProvider;
