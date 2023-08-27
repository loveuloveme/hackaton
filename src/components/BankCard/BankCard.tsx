import { FaCcVisa } from 'react-icons/fa';
import { RU } from 'country-flag-icons/react/3x2';

interface IBankCardProps {
    color: string;
}

const BankCard = (props: IBankCardProps) => {
    const { color } = props;

    return (
        <div
            className='relative w-full rounded-sm text-white flex flex-col justify-between p-8 pb-5 px-4 overflow-hidden pt-4 bg-gradient-to-tl'
            style={{
                background: color
            }}
        >
            <div
                className='flex justify-between z-10'
            >
                <FaCcVisa size={35} />
                <RU className="w-8" />
            </div>
            <div
                className='space-y-2 mt-2'
            >
                <p className="text-2xl font-bold tracking-more-wider">
                    ₽42,500
                </p>
                <p className="text-sm font-medium font-mono tracking-more-wider">
                    4642********7632
                </p>
            </div>
            <div
                className='absolute bottom-[50%] right-0 w-40 filter brightness-0 invert translate-x-[30%] h-[80%] translate-y-[50%] opacity-60'
            >
                <img
                    className='object-cover object-center'
                    src='https://companieslogo.com/img/orig/SBER.ME-10de1f5f.png?t=1629633978'
                />
            </div>
        </div>
    );
};

export default BankCard;