import { createBrowserRouter } from "react-router";
import { App } from "@/app/App";
import { HomePage } from "@/pages/home";

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
]);
