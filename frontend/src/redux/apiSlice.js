import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAccessToken, logout } from './authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000',
  credentials: 'include',
  prepareHeaders: (headers, { endpoint, getState }) => {
    // Skip auth header for these public endpoints
    const publicEndpoints = ['home', 'allCollection', 'productDetail'];

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
    const refreshResult = await baseQuery('/api/refresh/', api, extraOptions);
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
    // Public endpoints (no auth required)
    home: builder.query({ query: () => '/' }),
     allCollection: builder.query({
          query: ({page,sort,category,type,search}) => ({
            url:`/api/collections/?page=${page}&sort=${sort}&cateogry=${category}&type=${type}&search=${search}`
          }),
        }),
    productDetail: builder.query({ query: (id) => `/api/collections/${id}/` }),

    // Protected endpoints (require auth)
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/api/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
    registerUser: builder.mutation({
      query: (details) => ({
        url: "register/",
        method: "POST",
        body: details
      }),
    }),
  cart: builder.query({
          query: () => ({
            url:`/Cart/ListCart/`
          }),
        }),
    productDetail: builder.query({ query: (id) => `/api/collections/${id}/` }),

  }),
});

// Export hooks
export const {
  useHomeQuery,
  useAllCollectionQuery,
  useProductDetailQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useCartQuery
} = apiSlice;