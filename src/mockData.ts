import { Bank, BankCard, Wallet } from './types';

export const banks: Bank[] = [
    {
        id: 0,
        color: '#08A652',
        name: 'Сбербанк',
        countryCode: 'RU',
        logo: 'https://companieslogo.com/img/orig/SBER.ME-10de1f5f.png?t=1629633978',
    },
    {
        id: 1,
        color: '#FFDC2D',
        name: 'Тинькофф',
        countryCode: 'RU',
        logo: 'https://free-png.ru/wp-content/uploads/2022/04/free-png.ru-131-340x338.png',
    },
    {
        id: 2,
        color: '#002337',
        name: 'Jyske Bank',
        countryCode: 'DK',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Jyske_Bank.svg/797px-Jyske_Bank.svg.png?20210814003028',
    },
    {
        id: 3,
        color: '#fc5c65',
        name: 'Bank of America',
        countryCode: 'US',
        logo: 'https://companieslogo.com/img/orig/BAC-e7995069.png?t=1633208020',
    }
];

export const wallets: Wallet[] = [
    {
        id: 0,
        value: 1000_1001.12,
        bank: banks[0],
        currency: 'RUB',
        walletId: '40702810038000017240'
    },
    {
        id: 1,
        value: 10_123.18,
        bank: banks[1],
        currency: 'EUR',
        walletId: '40817810099910004312'
    },
    {
        id: 2,
        value: 100_123.18,
        bank: banks[2],
        currency: 'EUR',
        walletId: '40817810099910004312'
    },
    {
        id: 1,
        value: 12783041,
        bank: banks[3],
        currency: 'USD',
        walletId: '40817810099910004312'
    }

];

export const cards: BankCard[] = [
    {
        id: 0,
        value: 199,
        wallet: wallets[0],
        cardId: '378282246310005'
    },
    {
        id: 1,
        value: 100000000,
        wallet: wallets[1],
        cardId: '5555555555554444'
    },
    {
        id: 2,
        value: 100,
        wallet: wallets[2],
        cardId: '4012888888881881'
    },
    {
        id: 3,
        value: 100,
        wallet: wallets[3],
        cardId: '5105105105105100'
    }
];

//['#08A652', '#FFDC2D', '#4b7bec', '#fc5c65']