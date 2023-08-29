import { ReactElement } from 'react';
import { BiSolidDashboard, BiTransfer, BiSolidLayerPlus } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface ISideMenuButtonProps {
    title: string;
    to: string;
    icon: ReactElement;
}

const SideMenuButton = (props: ISideMenuButtonProps) => {
    const { title, icon, to } = props;

    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) => twMerge(
                    'transition-all flex items-center py-3 px-4 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-black group select-none',
                    isActive && 'bg-gray-100 !text-black'
                )}
            >
                {icon}
                <span className="ml-3">{title}</span>
            </NavLink>
        </li>
    );
};

const SideMenu = () => {
    return (
        <div
            className='w-[250px] sticky top-[100px] float-left pt-5'
        >
            <ul className="space-y-1 font-medium">
                <SideMenuButton to='/' title='Главная' icon={<BiSolidDashboard />} />
                <SideMenuButton to='/transfer' title='Перевод' icon={<BiTransfer />} />
                <SideMenuButton to='/create' title='Выпуск карты' icon={<BiSolidLayerPlus />} />
            </ul>
        </div>
    );
};

export default SideMenu;