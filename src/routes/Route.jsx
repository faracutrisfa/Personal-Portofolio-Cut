import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import PageLayout from "../components/Layout/PageLayout";

const createRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <PageLayout>
                <Home />
            </PageLayout>
        ),
    },
    {
        path: "/*",
        element: <div>Not found</div>,
    },
]);

const Route = () => {
    return <RouterProvider router={createRouter} />;
};

export default Route;