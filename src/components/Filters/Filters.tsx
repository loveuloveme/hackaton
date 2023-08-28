import { Label } from '../ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { getCountryName, getFlagIcon } from '@/lib/utils';
import { useAppSelector } from '@/redux';
import React from 'react';

const Filters = () => {
    const { list: banks } = useAppSelector(state => state.bank);

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
                        <SelectItem value="any">Любая</SelectItem>
                        {[...new Set(banks!.map(bank => bank.countryCode))].map(countryCode => {
                            return (
                                <SelectItem value={countryCode}>
                                    <div className="flex">
                                        {React.createElement(getFlagIcon(countryCode), { className: 'w-5 mr-2' })} {getCountryName(countryCode)}
                                    </div>
                                </SelectItem>
                            );
                        })}
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
        </div >
    );
};

export default Filters;