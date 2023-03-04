import * as React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import axiosClient from '../../axios';

import HeaderAdmin from './HeaderAdmin/HeaderAdmin';

const UserLayout = () => {
    const { currentUser, userToken, setCurrentUser, setUserToken } = useStateContext();

    if (!userToken) {
        return <Navigate to='/login' />
    }

    const handleLogout = () => {
        axiosClient.post('/logout')
            .then((res) => {
                setCurrentUser({});
                setUserToken(null);
                localStorage.clear();
            })
    }

    React.useEffect(() => {
        axiosClient.get('/admin')
            .then(({ data }) => {
                setCurrentUser(data);
            });
        localStorage.setItem('TOKEN', userToken);
    }, [])

    return (
        <>
            <HeaderAdmin currentUser={currentUser} handleLogout={handleLogout} />
            <Outlet />
        </>
    )
}

export default UserLayout;