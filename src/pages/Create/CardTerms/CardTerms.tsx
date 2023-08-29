import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { loremIpsum } from 'lorem-ipsum';
import { useMemo, useState } from 'react';

const CardTerms = () => {
    const [agreement, setAgreement] = useState<boolean>(false);

    const text = useMemo(() => loremIpsum({
        count: 10,
        units: 'paragraphs'
    }), []);

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Button>Создать</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Согласие</AlertDialogTitle>
                    <AlertDialogDescription>
                        Перед созданием карты ознакомьтесь с банковским соглашением.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                    {text}
                </ScrollArea>
                <div className="flex items-center space-x-2 select-none">
                    <Checkbox id="terms" checked={agreement} onCheckedChange={(e) => setAgreement(e as boolean)} />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Согласен с правилами и условиями
                    </label>
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>Отмена</AlertDialogCancel>
                    <AlertDialogAction disabled={!agreement}>Создать</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default CardTerms;