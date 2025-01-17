import { Context, useContext as useReactContext } from "react";

type UseContextProps<T> = {
  context: Context<T>;
  hookName: string;
  providerName: string;
};

export function useContext<T>({
  context,
  hookName,
  providerName,
}: UseContextProps<T>) {
  const data = useReactContext<T>(context);

  if (data === undefined) {
    const errorMessage = hookName.concat(
      " must be used within a ",
      providerName.concat("Provider")
    );
    throw new Error(errorMessage);
  }

  return data;
}

export default useContext;
