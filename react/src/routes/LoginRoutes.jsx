import { lazy } from "react";

import MinimalLayout from "../layout/MinimalLayout";

const Login = lazy(() => import('../pages/admin/Login/Login'));

const LogRegRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/login',
            element: <Login />
        },
    ]
};

export default LogRegRoutes;