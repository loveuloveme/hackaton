import { BASE_URL } from '@/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { setUser } from '../features/user.slice';
// import { IAuthInput, IGenericResponse } from './types';
// import { userApi } from './userApi';

export const authApi = createApi({
    reducerPath: 'auth.api',
    baseQuery,
    endpoints: (builder) => ({
        signIn: builder.mutation<unknown, { email: string, password: string }>({
            query(data) {
                return {
                    url: 'auth/signin',
                    method: 'POST',
                    body: data
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                } catch (error) { /* empty */ }
            },
        })
    }),
});

export const {
    useSignInMutation
} = authApi;