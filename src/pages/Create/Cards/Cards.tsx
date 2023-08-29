import BankCard from '@/components/BankCard';
import { TypographyH2, TypographyLead, TypographyMuted } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useAppSelector } from '@/redux';
import CardTerms from '../CardTerms';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cards = () => {
    const { list: cards } = useAppSelector(state => state.card);

    return (
        <>
            <div className='mt-5'>
                <div className="flex">
                    <Link to='/create'>
                        <Button className='mr-3' size="icon">
                            <ChevronLeft />
                        </Button>
                    </Link>
                    <TypographyH2 className='text-3xl'>Выбор тарифа</TypographyH2>
                </div>
                <Separator />
            </div>
            <div className="grid grid-cols-1 gap-4 mt-6">
                {cards.map((bank, i) => {
                    return (
                        <Card>
                            <CardContent
                                className='flex justify-between items-center p-0 py-2 px-2 pl-6'
                            >
                                <div
                                    className='flex-1 mr-2'
                                >
                                    <div className="space-y-1">
                                        <TypographyH2 className='text-3xl p-0 m-0'>Тариф {i + 1}</TypographyH2>
                                        <p className="text-sm text-muted-foreground">
                                            Lorem ipsum dolor sit amet
                                        </p>
                                    </div>
                                    <Separator className="my-4" />
                                    <div className="flex h-5 items-center space-x-4 text-sm">
                                        <CardTerms />
                                        <Separator orientation="vertical" />
                                        <Button variant='link' className='p-1 font-normal'>Подробнее</Button>
                                    </div>
                                </div>

                                <div className="w-[400px]">
                                    <BankCard
                                        data={{
                                            ...bank,
                                            value: 0,
                                            cardId: bank.cardId.slice(0, 4) + 'xxxxxxxxxxxxxxx'
                                        }}
                                        infoEnabled={false}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
            <TypographyMuted className='normal-case text-center mt-5'>Доступно {cards?.length} карт(ы) для открытия</TypographyMuted>
        </>
    );
};

export default Cards;