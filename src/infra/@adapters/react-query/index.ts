import {
    QueryClient
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      gcTime: 5 * (60 * 1000), // 5 mins
    },
    queries: {
      gcTime: 10 * (60 * 1000), // 10 mins
      staleTime: 5 * (60 * 1000), // 5 mins
    },
  },
});

export default queryClient;
