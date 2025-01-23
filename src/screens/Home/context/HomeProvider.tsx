import { ProviderProps, ReactNode } from "react";
import {
  HomeContext,
  UseHomeProviderReturnType,
  useHomeProvider,
} from "./use-home-context";

function HomeProvider(props: { children: ReactNode }) {
  const value = useHomeProvider();

  const contextProps: ProviderProps<UseHomeProviderReturnType> = {
    ...props,
    value,
  };
  return <HomeContext.Provider {...contextProps} />;
}

export default HomeProvider;
