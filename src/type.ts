export type BankCard = {
    id: number;
    value: number;
    color: string;
    name: string;
    type: 'visa' | 'master' | 'mir';
};