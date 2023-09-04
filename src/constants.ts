import { RiVisaLine, RiMastercardLine } from 'react-icons/ri';

export const BASE_URL = 'http://localhost:3000/api/v1';

export const CURRENCY_SYMBOL: Record<string, string> = {
    'RUB': '₽',
    'EUR': '€',
    'USD': '$'
};

export const CARD_SYMBOL: Record<string, typeof RiVisaLine> = {
    visa: RiVisaLine,
    mastercard: RiMastercardLine
    // american-express
    // diners-club
    // discover
    // jcb
    // unionpay
    // maestro
    // mir
    // elo
    // hiper
    // hipercard
};