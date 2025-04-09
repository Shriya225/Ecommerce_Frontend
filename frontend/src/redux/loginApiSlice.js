import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
    endpoints: (builder) => ({
      loginUser: builder.mutation({
        query: (details) => ({
          url:"login/",
          method:"POST",
          body:details
        }),
      }),
      registerUser: builder.mutation({
        query: (details) => ({
          url:"register/",
          method:"POST",
          body:details
        }),
      }),
    }),
  })

export const {useLoginUserMutation,useRegisterUserMutation}=loginApi;