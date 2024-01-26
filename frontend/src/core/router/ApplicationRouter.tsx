import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {HistoryPage} from "../../presentation/history/HistoryPage.tsx";
import {HomePage} from "../../presentation/home/HomePage.tsx";
import {OngoingPage} from "../../presentation/ongoing/OngoingPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/history",
        element: <HistoryPage />,
    },
    {
        path: "/ongoing",
        element: <OngoingPage />,
    }
]);

export const ApplicationRouter = () => {
    return (
        <RouterProvider router={router} />
    );
};