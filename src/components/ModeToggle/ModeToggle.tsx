import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { twMerge } from 'tailwind-merge';

interface IModeToggleProps {
    full?: boolean;
}

export default function ModeToggle(props: IModeToggleProps) {
    const { full = false } = props;
    const { theme, setTheme } = useTheme();

    const handleClick = () => {
        setTheme(theme == 'light' ? 'dark' : 'light');
    };

    return (
        <Button
            variant="outline"
            size={full ? 'lg' : 'icon'}
            onClick={handleClick}
            className={twMerge(full ? 'w-full' : '')}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    );
}