import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import TransactionPage from "../../presentation/roomTransaction/TransactionPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <TransactionPage />,
    },
]);

export const ApplicationRouter = () => {
    return (
        <RouterProvider router={router} />
    );
};