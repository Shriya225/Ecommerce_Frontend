import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAccessToken, logout } from './authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000',
  credentials: 'include',
  prepareHeaders: (headers, { endpoint, getState }) => {
    // Skip auth header for these public endpoints
    const publicEndpoints = ['lognAdmin'];

    if (!publicEndpoints.includes(endpoint)) {
      const token = getState().auth.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const refreshResult = await baseQuery({
    url: '/api/refresh/',
    method: 'POST',
  }, api, extraOptions);
    if (refreshResult.data?.access) {
      api.dispatch(setAccessToken(refreshResult.data.access));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    productList: builder.query({ query: () => '/AdminPannel/List/', providesTags: ['Products'] }
  ),
    ordersList: builder.query({ query: () => '/AdminPannel/ViewOrders/' }),
 
    loginAdmin: builder.mutation({
      query: (credentials) => ({
        url: 'api/admin-login/',
        method: 'POST',
        body: credentials,
      }),
    }),
    updateStatus: builder.mutation({
      query: (details) => ({
        url: 'AdminPannel/updateStatus/',
        method: 'PATCH',
        body: details,
      }),
    }),
    addProduct: builder.mutation({
      query: (details) => ({
        url: 'AdminPannel/Add/',
        method: 'POST',
        body: details,
      }),
       invalidatesTags: ['Products'],
    }),
    logout: builder.mutation({
          query: (details) => ({
            url: '/api/logout/',
            method: 'POST',
            body:details,
          }),
        
        }),
    deleteProduct: builder.mutation({
          query: (details) => ({
            url: '/AdminPannel/Delete/',
            method: 'DELETE',
            body:details,
          }),
        invalidatesTags:['Products']
        }),
  


}),

  
});

// Export hooks
export const {
useLoginAdminMutation,
useProductListQuery,
useOrdersListQuery,
useUpdateStatusMutation,
useAddProductMutation,
useLogoutMutation,
useDeleteProductMutation
} = apiSlice;