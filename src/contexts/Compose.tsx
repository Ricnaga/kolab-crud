import ReactQueryProvider from "@/infra/@adapters/react-query/ReactQueryProvider";
import { ThemeProvider } from "@application/theme/chakra-ui/Provider";
import { ReactNode } from "react";
import RTKProvider from "./RTK/RTKProvider";

type ProviderType = (props: { children: ReactNode }) => JSX.Element;

const combineComponents = (...components: ProviderType[]): ProviderType => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return (props: { children: ReactNode }): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent {...props} />
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};

const dataProviders: ProviderType[] = [
  ReactQueryProvider,
  RTKProvider,
  ThemeProvider,
];

const ComposeDataProviders = combineComponents(...dataProviders);

export { ComposeDataProviders as default };
