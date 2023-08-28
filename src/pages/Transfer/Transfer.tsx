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

    const isAllowed = fromCard !== toCard;

    return (
        <>
            <TypographyH2>Перевод средств</TypographyH2>
            <div className="grid grid-cols-3 gap-3 mt-5">
                <div className='col-span-2'>
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
            <Card
                className='flex justify-between items-center mt-5'
            >
                <CardHeader>
                    <CardTitle>Текущий курс</CardTitle>
                    <CardDescription>Актуальный курс на 18:08 28.08.2023</CardDescription>
                </CardHeader>
                <CardContent
                    className='p-6 py-0 text-4xl font-bold space-x-5 flex items-center'
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


            <div
                className="grid grid-cols-3 gap-5 mt-5"
            >
                <div className='col-span-2'>
                    <TypographyMuted>Сумма перевода</TypographyMuted>
                    <TransferInput placeholder='Сумма перевода' currency={fromCard.wallet.currency} />
                </div>
                <div>
                    <TypographyMuted>Сумма получения</TypographyMuted>
                    <TransferInput placeholder='Сумма получения' currency={toCard.wallet.currency} />
                </div>

            </div>
            <Dialog>
                <DialogTrigger
                    className='w-full text-left'
                    disabled={!isAllowed}
                >
                    <Button
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