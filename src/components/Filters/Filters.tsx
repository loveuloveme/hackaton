import { Label } from '../ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { DK } from 'country-flag-icons/react/3x2';

const Filters = () => {
    return (
        <div
            className='grid grid-cols-3 gap-2 my-4'
        >
            <div>
                <Label>Страна Банка</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Любая" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">
                            <div className="flex">
                                <DK className='w-5 mr-2' /> Дания
                            </div>
                        </SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Label>Банк</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Любой" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Бебрабанк</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Label>Валюта</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Любой" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Бебрабанк</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default Filters;