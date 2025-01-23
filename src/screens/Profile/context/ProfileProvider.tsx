import { ProviderProps, ReactNode } from "react";
import {
  ProfileContext,
  UseProfileProviderReturnType,
  useProfileProvider,
} from "./use-profile-context";

function ProfileProvider(props: { children: ReactNode }) {
  const value = useProfileProvider();

  const contextProps: ProviderProps<UseProfileProviderReturnType> = {
    ...props,
    value,
  };
  return <ProfileContext.Provider {...contextProps} />;
}

export default ProfileProvider;
