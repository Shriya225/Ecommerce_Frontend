import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAccessToken, logout } from './authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/api',
  credentials: 'include', // SEND cookies!
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    // Try refresh token
    const refreshResult = await baseQuery('/api/refresh/', api, extraOptions);
    if (refreshResult.data?.access) {
      api.dispatch(setAccessToken(refreshResult.data.access));
      result = await baseQuery(args, api, extraOptions); // retry
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: baseQueryWithReauth,
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
