import { ReactElement, useEffect } from 'react';
// import { useGetMeQuery } from '../../redux/api/userApi';
import Loader from '../Loader/Loader';
import { useSignInMutation } from '@/redux/api/auth.api';
import { useAppSelector } from '@/redux';

export interface IAuthMiddlewareProps {
    children: ReactElement;
}

const AuthMiddleware = (props: IAuthMiddlewareProps) => {
    const { children } = props;
    const { user } = useAppSelector(state => state.user);

    const [request, requestState] = useSignInMutation();

    useEffect(() => {

    }, []);

    const loading = !user?.token;

    // if (loading) {
    //     return <Loader />;
    // }

    return children;
};

export default AuthMiddleware;