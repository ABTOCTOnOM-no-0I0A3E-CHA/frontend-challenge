import { createBrowserRouter } from "react-router";
import { App } from "@/app/App";
import { HomePage } from "@/pages/home/ui/HomePage";
import { FavoritesPage } from "@/pages/favorites/ui/FavoritesPage";

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/favorites",
                element: <FavoritesPage />,
            },
        ],
    },
]);
