import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoadState, LoadStateDefault } from '../types';
import { User } from '@/types';

interface IUserState {
    user: User | null;
    loadState: ILoadState;
    error: any;
}

const initialState: IUserState = {
    user: null,
    loadState: LoadStateDefault,
    error: null,
};

export const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        logout: () => initialState,
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    }
});

export default userSlice.reducer;
export const { logout, setUser } = userSlice.actions;