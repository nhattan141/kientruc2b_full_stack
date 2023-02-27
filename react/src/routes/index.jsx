import { useRoutes } from "react-router";

import UserRoutes from './UserRoutes';
import LoginRoutes from './LoginRoutes';
import AdminRoutes from './AdminRoutes';

export default function Routes() {
    return useRoutes([UserRoutes, LoginRoutes, AdminRoutes]);
};
