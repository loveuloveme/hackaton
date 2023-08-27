import { DK } from 'country-flag-icons/react/3x2';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

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
            <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-sm text-muted-foreground mt-1">
                    40817810099910004312
                </p>
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