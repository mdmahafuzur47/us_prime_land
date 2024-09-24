import api from "../api";
export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["auth"],
    }),
    authCheck: builder.query({
      query: () => {
        return {
          url: "/user/authCheck",
          method: "GET",
        };
      },
      providesTags: ["auth"],
    }),
  }),
});

export const { useLoginUserMutation, useAuthCheckQuery } = authApi;
