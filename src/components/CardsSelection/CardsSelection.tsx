import { ReactElement } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { useAppSelector } from '@/redux';
import BankCard from '../BankCard';
import { TypographyH2 } from '../Typography';

interface ICardsSelectionProps {
    children: ReactElement;
}

const CardsSelection = (props: ICardsSelectionProps) => {
    const { children } = props;

    const { list: cards } = useAppSelector(state => state.card);

    return (
        <Dialog>
            <DialogTrigger
                className='w-full text-left'
            >
                {children}
            </DialogTrigger>
            <DialogContent>
                <TypographyH2>Ваши карты</TypographyH2>
                <div className="space-y-2">
                    {cards?.map(card => <BankCard data={card} />)}
                </div>
                {/* <CardsComponent open={true} useScale={false} /> */}
            </DialogContent>
        </Dialog>
    );
};

export default CardsSelection;