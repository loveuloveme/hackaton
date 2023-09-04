
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Loader = (props: any) => {
    const { show = true } = props;

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className='absolute top-0 left-0 h-screen bg-white dark:bg-black flex justify-center items-center z-50'
                    style={{
                        width: 'calc(100vw - (100vw - 100%))'
                    }}

                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                    }}
                >
                    <Loader2 />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;