import { Method } from "axios";
import axios from ".";

enum FetchStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export const promiseWrapper = <T = unknown>(promise: Promise<T>) => {
  let status: FetchStatus = FetchStatus.PENDING;
  let result: T;

  const s = promise.then(
    (value) => {
      status = FetchStatus.SUCCESS;
      result = value;
    },
    (error) => {
      status = FetchStatus.ERROR;
      result = error;
    }
  );

  return () => {
    switch (status) {
      case FetchStatus.PENDING:
        throw s;
      case FetchStatus.SUCCESS:
        return result;
      case FetchStatus.ERROR:
        throw result;
      default:
        throw new Error("Unknown status");
    }
  };
};

type IParams =
  | Record<string, string>
  | {
      page: string;
      size: string;
    };

interface RequestProps<T = object> {
  endpoint: string;
  method: Method;
  data?: T;
  timeout?: number;
  headers?: object;
  params?: IParams;
}

const getParams = (
  data: Pick<RequestProps, "endpoint" | "params">
): { url: string } => {
  const { endpoint, params } = data;

  if (params) {
    const formattedParams = Object.entries(params).filter((obj) => !!obj[1]);
    const queryString = new URLSearchParams(formattedParams).toString();
    return { url: endpoint.concat("?", queryString) };
  }

  return { url: endpoint };
};

export const request = async <T = unknown, D = object>(
  props: RequestProps<D>
): Promise<T> => {
  const { endpoint, params, ...rest } = props;

  const { url } = getParams({ endpoint, params });

  const config = {
    ...rest,
    url,
  };

  return axios.request<D, T, D>(config);
};
