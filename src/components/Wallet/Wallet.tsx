import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TypographyMuted } from '../Typography';
import { Wallet as WalletType } from '@/types';
import { valueToString } from '@/lib/utils';
import CurrencyList from 'currency-list';

interface IWalletProps {
    data: WalletType;
}

const Wallet = (props: IWalletProps) => {
    const { data } = props;

    const stringValue = valueToString(data.value);

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    <div
                        className='w-7 h-7 bg-stone-300 rounded-md p-2'
                        style={{
                            background: data.bank.color
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
                    <div className="text-2xl font-bold">
                        {CurrencyList.get(data.currency).symbol ?? ''} {stringValue.int}<span className='text-stone-500'>.{stringValue.float}</span>
                    </div>
                </div>
                <div>
                    <TypographyMuted className='m-0'>Номер счета</TypographyMuted>
                    <div className="text-sm text-muted-foreground font-mono">
                        {data.walletId}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Wallet;