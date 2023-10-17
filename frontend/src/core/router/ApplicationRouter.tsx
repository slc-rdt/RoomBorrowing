import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import TransactionPage from "../../presentation/roomTransaction/TransactionPage.tsx";
import {HistoryPage} from "../../presentation/history/HistoryPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <TransactionPage />,
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