import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/v1",
    credentials: "include",
  }),
  tagTypes: ["auth","property"],
  endpoints: () => ({}),
});

export default api;