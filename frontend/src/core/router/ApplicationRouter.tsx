import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {HistoryPage} from "../../presentation/history/HistoryPage.tsx";
import {HomePage} from "../../presentation/home/HomePage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/history",
        element: <HistoryPage />,
    },
]);

export const ApplicationRouter = () => {
    return (
        <RouterProvider router={router} />
    );
};