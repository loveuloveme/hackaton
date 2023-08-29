import { makeFrom } from '@/lib/utils';
import { motion } from 'framer-motion';
import BankCard from '../BankCard';
import { useAppSelector } from '@/redux';
import { useState } from 'react';

const CardsStack = () => {
    const { list: cards } = useAppSelector(state => state.card);

    const [isHover, setHover] = useState(false);

    return (
        <motion.div
            className='cursor-pointer'

            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
        >
            <div>
                {cards!.map((item, i, self) => {
                    const total = self.length;


                    // :_
                    return (
                        <motion.div
                            className='relative'
                            style={{
                                zIndex: total - i
                            }}
                            initial="collapsed"
                            animate={isHover ? 'hover' : 'collapsed'}
                            variants={{
                                open: { marginTop: i > 0 ? 10 : 0, filter: 'brightness(1)', },
                                collapsed: {
                                    marginTop: i > 0 ? -100 : 0,
                                    filter: `brightness(${makeFrom(i, total, 0.3)})`,
                                    scale: makeFrom(i, total, 0.95)
                                },
                                hover: {
                                    scale: i == 0 ? 1.02 :1,
                                    translateY: `${i*20}%`
                                }
                            }}
                        >
                            <BankCard className='shadow-2xl' data={item} infoEnabled={false} />
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default CardsStack;