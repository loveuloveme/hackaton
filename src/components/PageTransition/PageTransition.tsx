import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';

export const variants = {
    initial: {
        opacity: 0
    },
    final: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    }
};

const PageTransition = () => {
    return (
        <motion.div
            variants={variants}
            initial='initial'
            animate='final'
            exit='exit'
            transition={{
                duration: 0.1
            }}
        >
            <Outlet />
        </motion.div>
    );
};
export default PageTransition;