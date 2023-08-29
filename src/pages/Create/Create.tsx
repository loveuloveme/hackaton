import { TypographyH2 } from '@/components/Typography';
import { Route, Routes } from 'react-router-dom';
import Banks from './Banks';
import Cards from './Cards';

const Create = () => {
    return (
        <div className='pb-5'>
            <TypographyH2>Создание карты</TypographyH2>

            <Routes>
                <Route index path='/' element={<Banks />} />
                <Route path='/:bankId' element={<Cards />} />
            </Routes>
        </div>
    );
};

export default Create;