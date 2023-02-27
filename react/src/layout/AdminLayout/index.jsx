import { Outlet } from 'react-router-dom';

import HeaderAdmin from './HeaderAdmin/HeaderAdmin';

const UserLayout = () => {
    return (
        <>
            <HeaderAdmin />
            <Outlet />
        </>
    )
}

export default UserLayout;