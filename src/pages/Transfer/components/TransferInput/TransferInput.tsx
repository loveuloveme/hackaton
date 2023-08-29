import { Input } from '@/components/ui/input';
import { toFixedNumber } from '@/lib/utils';

interface ITransferInputProps {
    placeholder: string;
    currency: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
}

const TransferInput = (props: ITransferInputProps) => {
    const { placeholder, currency, value, ...rest } = props;

    return (
        <div
            className='flex items-center border-b-2'
        >
            <span
                className='text-3xl font-semibold'
            >
                {currency}
            </span>
            <Input
                min="0"
                max="10"
                value={toFixedNumber(value, 2)}
                type="number"
                id="email"
                placeholder={placeholder}
                className='h-[75px] shadow-none text-3xl font-semibold border-transparent focus:border-transparent focus:ring-0 focus:outline-none !outline-none'
                {...rest}
            />
        </div>
    );
};

export default TransferInput;