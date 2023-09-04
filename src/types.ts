export type User = {
    // email: string;
    token: string;
};

export type Tariff = {
    name: string;
    description: string;
    provider: string;
    currency: string;
};

export type Bank = {
    id: number;
    color: string;
    name: string;
    countryCode: string;
    logo: string;
    intName: string;
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
    tariff: Tariff;
};