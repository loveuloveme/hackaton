import CardsSelection from '@/components/CardsSelection/CardsSelection';
import { TypographyH2, TypographyMuted } from '@/components/Typography';
import Wallet from '@/components/Wallet';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/redux';
import { Plus } from 'lucide-react';
import CardsStack from '@/components/CardsStack';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    const { list: wallets } = useAppSelector(state => state.wallet);
    const { list: cards } = useAppSelector(state => state.card);
    
    return (
        <>
            <div>
                <TypographyH2>Банковский счет</TypographyH2>
                <motion.div
                    className='py-10 pt-5 rounded-lg backdrop-blur-md'
                >
                    <div className="flex justify-between items-center sm:hidden">
                        <TypographyMuted>Текущий баланс</TypographyMuted>
                        <TypographyMuted>Банк</TypographyMuted>
                    </div>
                    <div className="flex justify-between items-center sm:flex-col">
                        <div className='text-5xl font-bold leading-none'>
                            $15,231<span className='text-stone-500'>.89</span>
                        </div>
                        <div className='text-right sm:text-center sm:mt-8'>
                            <div className='font-bold text-3xl'>СБЕРБАНК</div>
                            <div className='font-mono'>40817810099910004312</div>
                        </div>
                    </div>
                </motion.div>
                <Separator />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6 lg:grid-cols-1">
                <div className='col-span-2 lg:col-auto'>
                    <div
                        className='flex justify-between'
                    >
                        <TypographyH2>Кошельки</TypographyH2>
                    </div>
                    <div
                        className='grid grid-cols-2 gap-2 md:grid-cols-1'
                    >
                        {wallets?.map(wallet => <Wallet key={wallet.id} data={wallet} />)}
                    </div>
                </div>
                <div>
                    <div
                        className='flex justify-between sm:mt-5'
                    >
                        <TypographyH2>Карты</TypographyH2>
                        <Link
                            to='/create'
                        >
                            <Button className='rounded-full' size="icon">
                                <Plus />
                            </Button>
                        </Link>
                    </div>
                    <CardsSelection>
                        <CardsStack cards={cards} />
                    </CardsSelection>
                </div>
            </div>
        </>
    );
};

export default Home;