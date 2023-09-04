import { BASE_URL } from '@/constants';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { RootState } from '../store';

export const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
        const user = (getState() as RootState).user.user;

        if (user && endpoint !== 'refresh') {
            headers.set('Authorization', `Bearer ${user.token}`);
        }

        return headers;
    }, 
});