import CardsComponent from '@/components/CardsComponent';
import CardsSelection from '@/components/CardsSelection/CardsSelection';
import { TypographyH2, TypographyMuted } from '@/components/Typography';
import Wallet from '@/components/Wallet';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Toggle } from '@/components/ui/toggle';
import { DK } from 'country-flag-icons/react/3x2';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Home = () => {
    const [showCards, setShowCards] = useState<boolean>(false);

    return (
        <>
            <div>
                <TypographyH2>Текущий счет</TypographyH2>
                <div
                    className='bg-[#272727] p-10 rounded-lg flex justify-between items-center text-white shadow-xl relative overflow-hidden'
                >
                    <div>
                        <div className='font-bold text-3xl'>СБЕРБАНК</div>
                        <div className='font-mono'>40817810099910004312</div>
                    </div>
                    <div className='text-5xl font-bold leading-none'>$15,231.89</div>
                </div>
            </div>

            <div
                className='grid grid-cols-2 gap-2 my-4'
            >
                <div>
                    <Label>Страна</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Любая" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">
                                <div className="flex">
                                    <DK className='w-5 mr-2' /> Дания
                                </div>
                            </SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label>Банк</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Любой" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Бебрабанк</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                    <div
                        className='flex justify-between'
                    >
                        <TypographyH2>Кошельки</TypographyH2>
                        {/* <Button variant='ghost'>Пополнить</Button> */}
                    </div>
                    <div
                        className='grid grid-cols-2 gap-2'
                    >
                        <Wallet />
                        <Wallet />
                        <Wallet />
                        <Wallet />
                    </div>
                    {/* {showWallets ? null : <TypographyMuted className='mt-3 text-center'>Отображены последние 4 кошелька</TypographyMuted>} */}
                </div>
                <div>
                    <div
                        className='flex justify-between'
                    >
                        <TypographyH2>Карты</TypographyH2>
                        <Toggle onPressedChange={setShowCards}>Показать все</Toggle>
                        {/* <Button variant='ghost'>Выпустить карту</Button> */}
                    </div>
                    <CardsComponent open={showCards} useScale={!showCards} />
                </div>
            </div>
        </>
    );
};

export default Home;