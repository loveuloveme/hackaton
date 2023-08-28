import CardsComponent from '@/components/CardsStack';
import CardsSelection from '@/components/CardsSelection/CardsSelection';
import Filters from '@/components/Filters';
import { TypographyH2, TypographyMuted } from '@/components/Typography';
import Wallet from '@/components/Wallet';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/redux';
import { Plus } from 'lucide-react';
import CardsStack from '@/components/CardsStack';

const Home = () => {
    const { list: wallets } = useAppSelector(state => state.wallet);
    const { list: banks } = useAppSelector(state => state.bank);

    return (
        <>
            <div>
                <TypographyH2>Банковский счет</TypographyH2>
                <div
                    className='py-10 pt-5 rounded-lg backdrop-blur-md '
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
            {/* <Filters /> */}
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
                        {wallets?.map(wallet => <Wallet data={wallet} />)}

                        {/* <Wallet />
                        <Wallet />
                        <Wallet /> */}
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
                        <CardsStack />
                    </CardsSelection>
                </div>
            </div>
        </>
    );
};

export default Home;