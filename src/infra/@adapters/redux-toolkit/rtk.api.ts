import { API_URL } from "@application/data/environment";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rtkApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
});

export default rtkApi;
