import CardsComponent from '@/components/CardsComponent';
import CardsSelection from '@/components/CardsSelection/CardsSelection';
import { TypographyH2, TypographyMuted } from '@/components/Typography';
import Wallet from '@/components/Wallet';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DK } from 'country-flag-icons/react/3x2';
import { Plus } from 'lucide-react';

const Home = () => {
    return (
        <>
            <div>
                <TypographyH2>Банковский счет</TypographyH2>
                <div
                    className='py-10 rounded-lg backdrop-blur-md '
                >
                    <div className="flex justify-between items-center">
                        <TypographyMuted>Текущий баланс</TypographyMuted>
                        <TypographyMuted>Банк</TypographyMuted>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className='text-5xl font-bold leading-none'>
                            $15,231<span className='text-stone-500'>.89</span>
                        </div>
                        <div className='text-right'>
                            <div className='font-bold text-3xl'>СБЕРБАНК</div>
                            <div className='font-mono'>40817810099910004312</div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className='grid grid-cols-2 gap-2 my-4'
            >
                <div>
                    <Label>Страна Банка</Label>
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
            <div className="grid grid-cols-3 gap-4 mt-6">
                <div className='col-span-2'>
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
                        <Button className='rounded-full' size="icon">
                            <Plus />
                        </Button>
                        {/* <Toggle onPressedChange={setShowCards}>Показать все</Toggle> */}
                        {/* <Button variant='ghost'>Выпустить карту</Button> */}
                    </div>
                    <CardsSelection>
                        <CardsComponent />
                    </CardsSelection>
                </div>
            </div>
        </>
    );
};

export default Home;