import ModeToggle from './components/ModeToggle/';
import { Separator } from './components/ui/separator';
import SideMenu from './components/SideMenu/SideMenu';
import Home from './pages/Home';

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
                        <h1 className='text-2xl font-mono font-semibold'>EX_HAND</h1>
                        <ModeToggle />
                    </div>
                </div>
                <Separator />
            </header>
            <div className="container">
                <SideMenu />
                <div className='pl-[270px] py-10'>
                    <Home />
                </div>
            </div>
        </div>
    );
}

export default App;
