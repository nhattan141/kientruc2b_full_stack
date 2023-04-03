import { lazy } from "react";

import UserLayout from "../layout/UserLayout";

const MainHome = lazy(() => import('../pages/user/Home/MainHome'));
const ListProject = lazy(() => import('../pages/user/ListProject/ListProject'));
const Project = lazy(() => import('../pages/user/Project/Project'));
const PhongThuy = lazy(() => import('../pages/user/PhongThuy/PhongThuy'));

const UserRoutes = {
    path: '/',
    element: <UserLayout />,
    children: [
        {
            path: '/',
            element: <MainHome />
        },
        {
            path: 'category/:cate_id',
            element: <ListProject />,
        },
        {
            path: 'project/:project_id',
            element: <Project />
        },
        {
            path: 'phongthuy',
            element: <PhongThuy />
        },
    ]
};

export default UserRoutes;