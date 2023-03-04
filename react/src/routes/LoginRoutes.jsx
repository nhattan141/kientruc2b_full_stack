import { lazy } from "react";

import MinimalLayout from "../layout/MinimalLayout";

const Login = lazy(() => import('../pages/admin/Login/Login'));
const Signup = lazy(() => import('../pages/admin/Signup/Signup'));

const LogRegRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Signup />
        },
    ]
};

export default LogRegRoutes;