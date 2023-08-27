import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
 
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function makeFrom(index: number, total: number, min: number) {
    return min + ((1 - min) * (1 - index / total));
}