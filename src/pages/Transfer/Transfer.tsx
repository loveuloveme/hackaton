import BankCard from '@/components/BankCard';
import { TypographyH2, TypographyLead, TypographyMuted } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { useAppSelector } from '@/redux';
import { useState } from 'react';
import CurrencyList from 'currency-list';
import { parseValue } from '@/lib/utils';
import CardsSelection from '@/components/CardsSelection/';
import { motion } from 'framer-motion';
import TransferInput from './components/TransferInput/';


const Transfer = () => {
    const { list: cards } = useAppSelector(state => state.card);

    const [fromCard, setFromCard] = useState(cards[0]);
    const [toCard, setToCard] = useState(cards[1]);
    const [currency, setCurrency] = useState(1.1);

    const [fromCardValue, setFromCardValue] = useState(0);
    const [toCardValue, setToCardValue] = useState(0);

    const isAllowed = fromCard !== toCard && fromCardValue <= fromCard.value;

    const handleFromChange = (value: string) => {
        const v = parseFloat(value);

        setToCardValue(v * currency);
        setFromCardValue(v);
    };

    const handleToChange = (value: string) => {
        const v = parseFloat(value);

        setFromCardValue(v * (1 / currency));
        setToCardValue(v);
    };

    return (
        <>
            <TypographyH2>Перевод средств</TypographyH2>
            <div className="grid grid-cols-3 gap-3 mt-5 md:grid-cols-1">
                <div className='col-span-2 md:col-span-1'>
                    <div>
                        <TypographyMuted>Откуда</TypographyMuted>
                        <CardsSelection
                            title='Карта для списания'
                            onSelect={setFromCard}
                        >
                            <motion.div
                                key={fromCard.id}
                                animate={{
                                    opacity: [0, 1],
                                    x: [-20, 0]
                                }}
                            >
                                <BankCard data={fromCard} infoEnabled={false} />
                            </motion.div>
                        </CardsSelection>
                    </div>
                </div>
                <div>
                    <div>
                        <TypographyMuted>Куда</TypographyMuted>
                        <CardsSelection
                            title='Карта для получения'
                            onSelect={setToCard}
                        >
                            <motion.div
                                key={toCard.id}
                                animate={{
                                    opacity: [0, 1],
                                    y: [-20, 0]
                                }}
                            >
                                <BankCard data={toCard} infoEnabled={false} />
                            </motion.div>
                        </CardsSelection>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <TypographyMuted className='hidden md:block'>Сумма перевода</TypographyMuted>
                <Card
                    className='flex justify-between items-center md:flex-col'
                >
                    <CardHeader
                        className='md:hidden'
                    >
                        <CardTitle>Текущий курс</CardTitle>
                        <CardDescription>Актуальный курс на 18:08 28.08.2023</CardDescription>
                    </CardHeader>
                    <CardContent
                        className='p-6 py-0 text-4xl font-bold space-x-5 flex items-center md:py-6'
                    >
                        <span>
                            {CurrencyList.get(fromCard.wallet.currency).symbol ?? ''} 1
                        </span>
                        <Separator orientation='vertical' className='h-[50px]' />
                        <span>
                            {CurrencyList.get(toCard.wallet.currency).symbol ?? ''} {parseValue(currency)}
                        </span>
                    </CardContent>
                </Card>
            </div>

            <div
                className="grid grid-cols-3 gap-5 mt-5 md:grid-cols-2 sm:grid-cols-1"
            >
                <div className='col-span-2 md:col-span-1'>
                    <TypographyMuted>Сумма перевода</TypographyMuted>
                    <TransferInput
                        placeholder='0'
                        currency={fromCard.wallet.currency}
                        value={fromCardValue}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFromChange(e.target.value)}
                    />
                </div>
                <div>
                    <TypographyMuted>Сумма получения</TypographyMuted>
                    <TransferInput
                        placeholder='0'
                        currency={toCard.wallet.currency}
                        value={toCardValue}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleToChange(e.target.value)}
                    />
                </div>

            </div>
            <Dialog>
                <DialogTrigger
                    className='w-full text-left'
                    disabled={!isAllowed}
                >
                    <Button
                        size='lg'
                        className='w-full mt-5'
                        disabled={!isAllowed}
                    >
                        Перевести
                    </Button>
                </DialogTrigger>
                <DialogContent
                    className=''
                >
                    <TypographyH2>Подверждение</TypographyH2>
                    <div className="space-y-2">
                        <BankCard data={fromCard} infoEnabled={false} />
                        <BankCard data={toCard} infoEnabled={false} />
                    </div>
                    <TypographyLead>Указаны суммы, которые будут получены после перевода</TypographyLead>

                    <Button
                        size='lg'
                        className='w-full mt-5'
                    >
                        Подтвердить
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Transfer;