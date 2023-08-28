import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Wallet } from '@/types';
import { wallets } from '@/mockData';
import { ILoadState, LoadStateDefault } from '../types';

interface IWalletState {
    list: Wallet[] | null;
    loadState: ILoadState;
    error: any;
}

const initialState: IWalletState = {
    list: [...wallets],
    loadState: LoadStateDefault,
    error: null,
};

export const walletSlice = createSlice({
    initialState,
    name: 'wallet',
    reducers: {

    }
});

export default walletSlice.reducer;

//export const { logout, setUser, setSubs } = bankSlice.actions;