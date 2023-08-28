import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Bank } from '@/types';
import { banks } from '@/mockData';
import { ILoadState, LoadStateDefault } from '../types';

interface IBankState {
    list: Bank[] | null;
    loadState: ILoadState;
    error: any;
}

const initialState: IBankState = {
    list: [...banks],
    loadState: LoadStateDefault,
    error: null,
};

export const bankSlice = createSlice({
    initialState,
    name: 'bank',
    reducers: {

    }
});

export default bankSlice.reducer;

//export const { logout, setUser, setSubs } = bankSlice.actions;