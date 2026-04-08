import { createBrowserRouter } from "react-router";
import { App } from "@/app/App";
import { HomePage } from "@/pages/home/ui/HomePage";

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
