import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Background = () => {
    const location = useLocation();

    return (
        <motion.div
            key={location.pathname}
            // animate={{
            //     y: ['10%', '0%'],
            //     transition: {
            //         ease: 'circInOut',
            //         duration: 0.5
            //     }
            // }}
            className="-z-10 w-full h-[10vh] bg-[url('./wave.svg')] dark:bg-[url('./wave-dark.svg')] bg-no-repeat bg-top bg-cover mt-auto"
        >

        </motion.div>
    );
};

export default Background;