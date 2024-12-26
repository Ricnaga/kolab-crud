import { HttpStatusCode, Method, isAxiosError } from 'axios';
import axios from '.';

const errorStatus = {
  [HttpStatusCode.Unauthorized]:
    'Usuário e/ou senha inválido(s). Tente novamente.',
  [HttpStatusCode.NotFound]: 'Não encontrado',
  [HttpStatusCode.Forbidden]:
    'Para realizar este vínculo, verifique a validação de seu usuário',
};

type IParams = Record<string, string> | {
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
  data: Pick<RequestProps, 'endpoint' | 'params'>,
): { url: string } => {
  const { endpoint, params } = data;

  if (params) {
    const formattedParams = Object.entries(params).filter((obj) => !!obj[1]);
    const queryString = new URLSearchParams(formattedParams).toString();
    return { url: endpoint.concat('?', queryString) };
  }

  return { url: endpoint };
};

export const request = async <T = unknown, D = object>(
  props: RequestProps<D>,
): Promise<T> => {
  const { endpoint, params, ...rest } = props;

  const { url } = getParams({ endpoint, params });

  const config = {
    ...rest,
    url,
  };

  try {
    const response = await axios.request<D, T, D>(config);
    return response;
  } catch (error) {
    console.error(`Erro ao requisitar dados para ${endpoint}:`, error);
    if (isAxiosError(error)) {
      throw {
        ...error,
        message: errorStatus[error.status as keyof typeof errorStatus],
        title: error.message,
      };
    }
    throw error;
  }
};