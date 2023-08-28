import ModeToggle from './components/ModeToggle/';
import { Separator } from './components/ui/separator';
import SideMenu from './components/SideMenu/SideMenu';
import Home from './pages/Home';

import { Link, Route, Routes } from 'react-router-dom';
import Transfer from './pages/Transfer';
import Create from './pages/Create';

function App() {
    return (
        <div
            className="h-screen relative overflow-y-auto bg-repeat-x bg-bottom bg-[url('./wave.svg')] dark:bg-[url('./wave-dark.svg')]"
        >
            <header
                className='z-10 sticky top-0 backdrop-blur-md bg-white/30 dark:bg-black/30'
            >
                <div className="container">
                    <div className="flex items-center justify-between h-[100px]">
                        <Link
                            to='/'
                        >
                            <h1 className='text-2xl font-mono font-semibold'>EX_HAND</h1>
                        </Link>
                        <ModeToggle />
                    </div>
                </div>
                <Separator />
            </header>
            <div className="container">
                <SideMenu />
                <div className='pl-[270px] py-10'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/transfer" element={<Transfer />} />
                        <Route path="/create" element={<Create />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
