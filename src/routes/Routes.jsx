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
import RecipeSection from "../components/RecipeSectionComponents/RecipeSection/RecipeSection";
import FoodAndWine from "../components/CustomSections/FoodAndWine/FoodAndWine";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <ChefSection />,
                loader: () => fetch('http://localhost:5000/chefData')
            },
            {
                path: 'recipes/:id',
                element: <PrivateRouter><RecipeSection /></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
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