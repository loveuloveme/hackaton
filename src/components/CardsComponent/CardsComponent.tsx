import { makeFrom } from '@/lib/utils';
import { motion } from 'framer-motion';
import BankCard from '../BankCard';

interface ICardsComponent {
    open?: boolean;
    useScale?: boolean;
}

const CardsComponent = (props: ICardsComponent) => {
    const { open = false, useScale = true } = props;

    return (
        <motion.div
            className='cursor-pointer'
        >
            <div>
                {['#08A652', '#FFDC2D', '#4b7bec', '#fc5c65'].map((item, i, self) => {
                    const total = self.length;

                    return (
                        <motion.div
                            className='relative'
                            style={{
                                zIndex: total - i
                            }}
                            initial="collapsed"
                            animate={open ? 'open' : 'collapsed'}
                            variants={{
                                open: { marginTop: i > 0 ? 10 : 0, filter: 'brightness(1)', },
                                collapsed: {
                                    marginTop: i > 0 ? -100 : 0,
                                    filter: `brightness(${makeFrom(i, total, 0.3)})`,
                                    scale: useScale ? makeFrom(i, total, 0.95) : 1,
                                }
                            }}
                        >
                            <BankCard color={item} />
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default CardsComponent;