/* eslint-disable no-unused-vars */
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ChefSection from "../components/ChefSectionComponents/ChefSection/ChefSection";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <ChefSection />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Registration />
            },
            {
                path: 'blog',
                element: <Blog />
            }
        ]
    }
])

export default router;