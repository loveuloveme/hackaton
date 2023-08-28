import { CARD_SYMBOL } from '@/constants';
import { type ClassValue, clsx } from 'clsx';
import creditCardType from 'credit-card-type';
import { twMerge } from 'tailwind-merge';
import { BsCreditCard2Back } from 'react-icons/bs';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function makeFrom(index: number, total: number, min: number) {
    return min + ((1 - min) * (1 - index / total));

}

export function valueToString(v: number) {
    return {
        int: Math.trunc(v).toString().replace(/(?<=[0-9])(?=(?:[0-9]{3})+(?![0-9]))/g, ' '),
        float: (v - Math.trunc(v)).toFixed(2).slice(2)
    };
}

export function getCardIcon(cardId: string) {
    return CARD_SYMBOL[creditCardType(cardId)[0].type] ?? BsCreditCard2Back;
}