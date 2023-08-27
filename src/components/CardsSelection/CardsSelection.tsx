import { ReactElement } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import CardsComponent from '../CardsComponent';

interface ICardsSelectionProps {
    children: ReactElement;
}

const CardsSelection = (props: ICardsSelectionProps) => {
    const { children } = props;

    return (
        <Dialog>
            <DialogTrigger
                className='w-full text-left'
            >
                {children}
            </DialogTrigger>
            <DialogContent>
                <CardsComponent open={true} useScale={false} />
            </DialogContent>
        </Dialog>
    );
};

export default CardsSelection;