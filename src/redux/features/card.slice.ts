import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BankCard } from '@/types';
import { cards } from '@/mockData';
import { ILoadState, LoadStateDefault } from '../types';

interface ICardState {
    list: BankCard[] | null;
    loadState: ILoadState;
    error: any;
}

const initialState: ICardState = {
    list: [...cards],
    loadState: LoadStateDefault,
    error: null,
};

export const cardSlice = createSlice({
    initialState,
    name: 'card',
    reducers: {

    }
});

export default cardSlice.reducer;

//export const { logout, setUser, setSubs } = bankSlice.actions;