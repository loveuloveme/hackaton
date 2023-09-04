import ModeToggle from './components/ModeToggle/';
import { Separator } from './components/ui/separator';
import SideMenu, { SideMenuMobile } from './components/SideMenu/SideMenu';
import Home from './pages/Home';

import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Transfer from './pages/Transfer';
import Create from './pages/Create';
import { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import { useGetCardsQuery } from './redux/api/user.api';


function App() {
    useGetCardsQuery(null);
    
    const containerRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo(0, 0);
        }
    }, [location.pathname]);

    return (
        <div
            className="h-screen relative overflow-y-auto flex flex-col"
            ref={containerRef}
        >
            <header
                className='z-50 sticky top-0 backdrop-blur-md bg-white/30 dark:bg-black/30'
            >
                <div className="container">
                    <div className="flex items-center justify-between h-[100px]">
                        <Link
                            to='/'
                        >
                            <h1 className='text-2xl font-mono font-semibold'>EX_HAND</h1>
                        </Link>
                        <div className="lg:hidden">
                            <ModeToggle />
                        </div>
                        <div className='hidden lg:block'>
                            <SideMenuMobile />
                        </div>
                    </div>
                </div>
                <Separator />
            </header>
            <div className="container">
                <SideMenu />
                <div className='pl-[270px] lg:pl-0 py-5'>
                    <AnimatePresence mode='wait'>
                        <Routes location={location} key={location.key}>
                            <Route
                                element={<PageTransition />}
                            >
                                <Route path='/' element={<Home />} />
                                <Route path='/transfer' element={<Transfer />} />
                                <Route path='/create/*' element={<Create />} />
                            </Route>
                        </Routes>
                    </AnimatePresence>
                </div>
            </div>
            <footer
                className="bg-[url('./assets/wave.svg')] dark:bg-[url('./assets/wave-dark.svg')] bg-no-repeat bg-top bg-cover mt-auto"
            >
                
                <div className="container h-[100px] flex items-center">
                    <div className='text-md text-center text-stone-700 font-medium uppercase'>Инфляция</div>
                </div>
            </footer>
            {/* <Background /> */}
        </div >
    );
}

export default App;
