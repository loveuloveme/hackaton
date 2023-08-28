import { DK } from 'country-flag-icons/react/3x2';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TypographyMuted } from '../Typography';

const Wallet = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    <div
                        className='w-7 h-7 bg-[#08a652] rounded-md p-2'
                    >
                        <img
                            className='object-cover object-center filter brightness-0 invert'
                            src='https://companieslogo.com/img/orig/SBER.ME-10de1f5f.png?t=1629633978'
                        />
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent
                className='space-y-2 mt-2'
            >
                <div>
                    <TypographyMuted className='m-0'>Баланс</TypographyMuted>
                    <div className="text-2xl font-bold">$45,231.89</div>
                </div>
                <div>
                    <TypographyMuted className='m-0'>Номер счета</TypographyMuted>
                    <div className="text-sm text-muted-foreground">
                        40817810099910004312
                    </div>
                </div>
            </CardContent>
        </Card>
        // <div
        //     className='p-5 rounded-md bg-[#fbfbfb]'
        // >
        //     <div className="flex justify-between">
        //         <div
        //             className='w-7 h-7 bg-[#08a652] rounded-md p-2'
        //         >
        //             <img
        //                 className='object-cover object-center filter brightness-0 invert'
        //                 src='https://companieslogo.com/img/orig/SBER.ME-10de1f5f.png?t=1629633978'
        //             />
        //         </div>

    //         <DK className="w-9" />
    //     </div>
    //     <div className='text-3xl font-bold text-md mt-6 mb-2'>₽42,500</div>
    //     <div className='text-sm font-mono'>40817810099910004312</div>
    // </div>
    );
};

export default Wallet;