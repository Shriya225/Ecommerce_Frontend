import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const homeApi = createApi({
    reducerPath: 'homeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
    endpoints: (builder) => ({
      home: builder.query({
        query: () => ({
          url:"/"
        }),
      }),
      allCollection: builder.query({
        query: () => ({
          url:"/api/collections/"
        }),
      })
    }),
  })

export const {useHomeQuery,useAllCollectionQuery}=homeApi;