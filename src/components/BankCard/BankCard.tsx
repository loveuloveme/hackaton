import * as CountryFlags from 'country-flag-icons/react/3x2';
import { BankCard as BankCardType } from '@/types';
import React from 'react';
import { CURRENCY_SYMBOL } from '@/constants';
import { getCardIcon, valueToString } from '@/lib/utils';

interface IBankCardProps {
    data: BankCardType;
}

const BankCard = (props: IBankCardProps) => {
    const { data } = props;

    const flagIcon = CountryFlags[data.wallet.bank.countryCode as keyof typeof CountryFlags];

    return (
        <div
            className='relative w-full rounded-sm text-white flex flex-col justify-between p-8 pb-5 px-4 overflow-hidden pt-4 bg-gradient-to-tl'
            style={{
                background: data.wallet.bank.color
            }}
        >
            <div
                className='flex justify-between z-10'
            >
                {React.createElement(getCardIcon(data.cardId), { size: 35 })}
                {flagIcon && React.createElement(flagIcon, { className: 'w-8' })}
            </div>
            <div
                className='space-y-2 mt-2 z-20'
            >
                <p className="text-2xl font-bold tracking-more-wider">
                    {CURRENCY_SYMBOL[data.wallet.currency] ?? ''} {valueToString(data.value).int}
                </p>
                <div className="flex justify-between text-sm font-medium font-mono tracking-more-wider">
                    <p className="">
                        {data.cardId}
                    </p>
                    <p className="uppercase font-bold">
                        {data.wallet.bank.name}
                    </p>
                </div>
            </div>
            <div
                className='absolute inset-0 py-5 px-2 bg-gradient-to-t from-black/30 via-transparent to-transparent'
            >
                <img
                    className=' filter brightness-0 invert opacity-60 ml-auto w-[50%] h-full object-contain object-right'
                    src={data.wallet.bank.logo}
                />
            </div>
        </div >
    );
};

export default BankCard;