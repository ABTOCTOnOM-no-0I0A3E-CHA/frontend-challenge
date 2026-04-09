import { useState } from "react";
import Header from "@/widgets/header/ui/Header";
import { HomePage } from "@/pages/home/ui/HomePage";
import { FavoritesPage } from "@/pages/favorites/ui/FavoritesPage";

export type Page = "home" | "favorites";

export function App() {
    const [page, setPage] = useState<Page>("home");

    return (
        <>
            <Header currentPage={page} onChangePage={setPage} />
            <div style={{ display: page === "home" ? "block" : "none" }}>
                <HomePage />
            </div>
            <div style={{ display: page === "favorites" ? "block" : "none" }}>
                <FavoritesPage />
            </div>
        </>
    );
}
