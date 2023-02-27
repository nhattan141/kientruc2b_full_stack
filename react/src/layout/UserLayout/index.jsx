import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Bubble from './Bubble/Bubble';

const UserLayout = () => {
    return (
        <>
            <Header />
            <Bubble />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout;