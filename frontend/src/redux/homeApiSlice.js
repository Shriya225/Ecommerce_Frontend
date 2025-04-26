  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
  import { useParams } from 'react-router-dom';

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
          query: ({page,sort}) => ({
            url:`/api/collections/?page=${page}&sort=${sort}`
          }),
        }),
        productDetail: builder.query({
          query: (id) => ({
            url:`/api/collections/${id}/`
          }),
        })
      }),
    })

  export const {useHomeQuery,useAllCollectionQuery,useProductDetailQuery}=homeApi;