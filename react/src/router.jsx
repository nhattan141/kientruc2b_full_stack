import { createBrowserRouter } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import LogRegRoutes from "./routes/LoginRoutes";

const router = createBrowserRouter([
    UserRoutes, AdminRoutes, LogRegRoutes
])

export default router