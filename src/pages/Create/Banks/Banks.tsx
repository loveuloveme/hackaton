import { TypographyH2, TypographyLead } from '@/components/Typography';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getFlagIcon } from '@/lib/utils';
import { useAppSelector } from '@/redux';
import React from 'react';
import { Link } from 'react-router-dom';

const Banks = () => {
    const { list: banks } = useAppSelector(state => state.bank);

    return (
        <>
            <div
                className="rounded-md flex flex-col justify-end px-5 h-[300px] bg-center bg-contain bg-no-repeat bg-black bg-[url('./assets/bank-bg.png')]"
            >
                <div className="pb-5">
                    <TypographyH2 className='text-3xl text-white p-0 m-0 mb-1'>Выбор банка</TypographyH2>
                    <TypographyLead className='text-white/70'>Выберите нужный банк с учётом его страны</TypographyLead>
                </div>
            </div>
            <div className='mt-5'>
                <TypographyH2 className='text-3xl'>Доступные банки</TypographyH2>
                <Separator />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
                {banks.map(bank => {
                    return (
                        <Link to={'' + bank.intName}>
                            <Card className=' cursor-pointer hover:bg-stone-100/80 dark:hover:bg-white/10'>
                                <CardContent
                                    className='flex flex-col justify-end p-0 relative h-[200px]'
                                >

                                    <img className='absolute p-10 w-full h-full object-contain' src={bank.logo} draggable={false} />
                                    <div className="py-4 px-5 z-10 flex flex-col justify-between h-full">
                                        {React.createElement(getFlagIcon(bank.countryCode), { className: 'w-7 self-end rounded-sm' })}
                                        <div className="text-xl uppercase font-semibold">
                                            {bank.name}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Banks;