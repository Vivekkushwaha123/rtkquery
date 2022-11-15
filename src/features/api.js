import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),

    updateUser: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: `/users/`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserQuery,
  useAddUserMutation,
} = userApi;
