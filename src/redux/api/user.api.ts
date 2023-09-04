import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { BankCard } from '@/types';
import { setCards } from '../features/card.slice';

export const userApi = createApi({
    reducerPath: 'user.api',
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getCards: builder.query<BankCard[], null>({
            query() {
                return {
                    url: 'cards/',
                };
            },
            // transformResponse: (result: { data: IUser }) => result.data,
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCards(data as BankCard[]));
                } catch (error) {
                }
            },
        }),
    }),
});

export const {
    useGetCardsQuery
} = userApi;