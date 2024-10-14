/* eslint-disable @typescript-eslint/no-explicit-any */
// create_property_type

import api from "../api";
export const propertyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createPropertyType: builder.mutation({
      query: (data: any) => {
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
    propertyTypeStatusChange: builder.mutation({
      query: (data: any) => ({
        url: "/property/propertyType_status_change",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["property"],
    }),
    deletePropertyType: builder.mutation({
      query: (data: any) => ({
        url: "/property/delete_property_type",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["property"],
    }),
    updatePropertyType: builder.mutation({
      query: (data: any) => ({
        url: "/property/update_property_type",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["property"],
    }),
    // county property
    createCounty: builder.mutation({
      query: (data: any) => ({
        url: "/property/create_county",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["property"],
    }),
    getCounties: builder.query({
      query: () => ({
        url: "/property/get_counties",
        method: "GET",
      }),
      providesTags: ["property"],
    }),
    updateCounty: builder.mutation({
      query: (data: any) => ({
        url: "/property/update_county",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["property"],
    }),
    deleteCounty: builder.mutation({
      query: (data: any) => ({
        url: "/property/delete_county",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["property"],
    }),
    countyStatusChange: builder.mutation({
      query: (data: any) => ({
        url: "/property/county_status_change",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["property"],
    })
  }),
});

export const {
  useCreatePropertyTypeMutation,
  useGetPropertyTypeQuery,
  usePropertyTypeStatusChangeMutation,
  useDeletePropertyTypeMutation,
  useUpdatePropertyTypeMutation,
  useCreateCountyMutation,
  useGetCountiesQuery,
  useUpdateCountyMutation,
  useDeleteCountyMutation,
  useCountyStatusChangeMutation
} = propertyApi;
