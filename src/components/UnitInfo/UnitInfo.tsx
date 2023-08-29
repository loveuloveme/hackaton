import { Dialog, DialogContent, DialogFooter, DialogTrigger } from '../ui/dialog';
import BankCard from '../BankCard';
import { useAppSelector } from '@/redux';
import { TypographyH2, TypographyMuted } from '../Typography';
import { Button } from '../ui/button';
import Wallet from '../Wallet';
import { BankCard as BankCardType, Wallet as WalletType } from '@/types';
import React, { ReactElement, useState } from 'react';

interface IUnitInfo {
    unit: WalletType | BankCardType | null;
    children: ReactElement;
    enabled?: boolean;
}

const UnitInfo = (props: IUnitInfo) => {
    const { unit, children, enabled = true } = props;

    const [open, setOpen] = useState(false);

    const { list: wallets } = useAppSelector(state => state.wallet);
    const { list: banks } = useAppSelector(state => state.bank);
    const { list: cards } = useAppSelector(state => state.card);

    if (!enabled) {
        return children;
    }

    if (unit == null) return;
    const isCard = 'cardId' in unit;

    return (
        <Dialog
            // open={open}
            // onOpenChange={setOpen}
        >
            <DialogTrigger
                className='text-left w-full'
            >
                {children}
            </DialogTrigger>
            <DialogContent>
                <div
                    className='space-y-5'
                >
                    <div>
                        <TypographyH2>
                            {isCard ? 'Карта' : 'Счет'}
                        </TypographyH2>
                        {isCard ?
                            <BankCard data={unit as unknown as BankCardType} infoEnabled={false} />
                            :
                            <Wallet data={unit as WalletType} infoEnabled={false} />
                        }
                        <Button className='w-full mt-2' variant='destructive'>
                            {isCard ? 'Закрыть карту' : 'Закрыть счет'}
                        </Button>
                    </div>
                    <div>
                        <TypographyH2>
                            {isCard ? 'Привязанный счет' : 'Привязанные карты'}
                        </TypographyH2>
                        <div
                            className='space-y-2'
                        >
                            {isCard ?
                                <div
                                    onClick={handleInnerClick}
                                >
                                    <Wallet data={(unit as BankCardType).wallet} />
                                </div>
                                :
                                cards?.filter(card => card.wallet === unit).map(card => {
                                    return (
                                        <div
                                            onClick={handleInnerClick}
                                        >
                                            <BankCard data={card} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="flex justify-between w-full">
                        <TypographyMuted className="normal-case">Создан{isCard ? 'а ' : ''} 20.08.2023</TypographyMuted>
                        {isCard ? <TypographyMuted className="normal-case">Действительна до 20.08.2029</TypographyMuted> : null}
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    );
};

export default UnitInfo;