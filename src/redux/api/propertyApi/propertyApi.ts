// create_property_type

import api from "../api";
export const propertyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createPropertyType: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/property/create_property_type",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["property"],
    }),
    getPropertyType: builder.query({
      query: () => ({
        url: "/property/get_property_type",
        method: "GET",
      }),
      providesTags: ["property"],
    }),
  }),
});

export const { useCreatePropertyTypeMutation,useGetPropertyTypeQuery } = propertyApi;
