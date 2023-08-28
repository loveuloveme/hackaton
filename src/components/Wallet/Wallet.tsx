import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TypographyMuted } from '../Typography';
import { Wallet as WalletType } from '@/types';
import { cn, valueToString } from '@/lib/utils';
import CurrencyList from 'currency-list';
import UnitInfo from '../UnitInfo';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface IWalletProps {
    data: WalletType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
}

const Wallet = (props: IWalletProps) => {
    const { data, infoEnabled = true, className, ...rest } = props;

    const stringValue = valueToString(data.value);

    return (
        <UnitInfo
            unit={data}
            enabled={infoEnabled}
        >
            <Card
                className={twMerge('rounded-xl transition-colors h-full flex flex-col', className, infoEnabled ? 'hover:bg-stone-100 dark:hover:bg-[#242424]' : '')}
                {...rest}
            >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        <div
                            className='w-7 h-7 bg-stone-300 rounded-md p-2'
                            style={{
                                background: data?.bank?.color ?? '#323232'
                            }}
                        >
                            <img
                                className='object-cover object-center filter brightness-0 invert'
                                src={data.bank.logo}
                            />
                        </div>

                    </CardTitle>
                    <div>{data.currency}</div>
                </CardHeader>
                <CardContent
                    className='space-y-2 mt-2'
                >
                    <div>
                        <TypographyMuted className='m-0'>Баланс</TypographyMuted>
                        <div className="text-2xl font-bold line-clamp-1">
                            {CurrencyList.get(data.currency).symbol ?? ''} {stringValue.int}<span className='text-stone-500'>.{stringValue.float}</span>
                        </div>
                    </div>
                    <div>
                        <TypographyMuted className='m-0'>Номер счета</TypographyMuted>
                        <div className="text-sm text-muted-foreground font-mono line-clamp-1">
                            {data.walletId}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </UnitInfo>
    );
};

export default Wallet;