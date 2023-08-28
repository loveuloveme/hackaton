export type Bank = {
    id: number;
    color: string;
    name: string;
    countryCode: string;
    logo: string;
};


export type Wallet = {
    id: number;
    value: number;
    bank: Bank;
    walletId: string;
    currency: string;
};

export type BankCard = {
    id: number;
    value: number;
    cardId: string;
    wallet: Wallet;
};