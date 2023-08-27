import { ReactElement } from 'react';
import { BiSolidDashboard, BiTransfer, BiSolidLayerPlus } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';

interface ISideMenuButtonProps {
    title: string;
    icon: ReactElement;
    active?: boolean;
}

const SideMenuButton = (props: ISideMenuButtonProps) => {
    const { title, icon, active } = props;

    return (
        <li>
            <a
                href="/"
                className={twMerge(
                    'flex items-center py-3 px-4 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group',
                    active && 'bg-gray-100'
                )}
            >
                {icon}
                <span className="ml-3">{title}</span>
            </a>
        </li>
    );
};

const SideMenu = () => {
    return (
        <div
            className='w-[250px] sticky top-[110px] float-left pt-5'
        >
            <ul className="space-y-1 font-medium">
                <SideMenuButton title='Главная' icon={<BiSolidDashboard />} active={true} />
                <SideMenuButton title='Перевод' icon={<BiTransfer />} />
                <SideMenuButton title='Выпуск карты' icon={<BiSolidLayerPlus />} />
            </ul>
        </div>
    );
};

export default SideMenu;