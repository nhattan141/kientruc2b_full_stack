import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {
    const { userToken } = useStateContext();

    if (userToken) {
        return <Navigate to='/admin/projects' />;
    }

    return (
        <>
            <Outlet />
        </>
    );
}

export default MinimalLayout;
