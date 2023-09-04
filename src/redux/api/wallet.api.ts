import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const walletApi = createApi({
    reducerPath: 'wallet.api',
    baseQuery,
    endpoints: (builder) => ({
        signIn: builder.mutation<unknown, { email: string, password: string }>({
            query(data) {
                return {
                    url: 'wallets/signin',
                    method: 'POST',
                    body: data
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    //await dispatch(setUser({ token: access_token }));
                } catch (error) { /* empty */ }
            },
        })
    }),
});

export const {
    useSignInMutation
} = walletApi;