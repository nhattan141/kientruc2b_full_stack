import { lazy } from "react";

import AdminLayout from "../layout/AdminLayout";

const ProjectManage = lazy(() => import('../pages/admin/ProjectManage/ProjectManage'));

const AdminRoutes = {
    path: '/admin',
    element: <AdminLayout />,
    children: [
        {
            path: 'projects',
            element: <ProjectManage />
        },
    ]
};

export default AdminRoutes;