import { ReactElement, useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { useAppSelector } from '@/redux';
import BankCard from '../BankCard';
import { TypographyH2 } from '../Typography';
import { BankCard as BankCardType } from '@/types';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

interface ICardsSelectionProps {
    children: ReactElement;
    title?: string;
    onSelect?: (arg0: BankCardType) => void;
}

const CardsSelection = (props: ICardsSelectionProps) => {
    const { children, title, onSelect } = props;

    const { list: cards } = useAppSelector(state => state.card);
    const [open, setOpen] = useState(false);

    const isControlled = onSelect !== undefined;

    return (
        <Dialog
            onOpenChange={setOpen}
            open={open}
        >
            <DialogTrigger
                className='w-full text-left'
            >
                {children}
            </DialogTrigger>
            <DialogContent>
                <div className="flex justify-between">
                    <TypographyH2>{title ?? 'Ваши карты'}</TypographyH2>
                    <Button
                        size='icon'
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <X />
                    </Button>
                </div>
                <div className="space-y-2">
                    {cards?.map((card, i) => {
                        return (
                            <motion.div
                                key={card.cardId}
                                variants={{
                                    initial: {
                                        translateY: `-${50 * i}%`,
                                        zIndex: 100 - i
                                    },

                                    open: {
                                        translateY: 0
                                    }
                                }}

                                initial='initial'
                                animate='open'

                                transition={{
                                    delay: 0.2,
                                    duration: 0.5,
                                    type: 'spring'
                                }}

                                onClick={() => {
                                    if (isControlled) {
                                        onSelect(card);
                                        setOpen(false);
                                    }
                                }}

                                className='relative'
                            >
                                <BankCard
                                    data={card}
                                    isControlled={isControlled}
                                    infoEnabled={true}
                                    className='cursor-pointer'
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CardsSelection;