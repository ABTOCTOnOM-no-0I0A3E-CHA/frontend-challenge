import { useState } from "react";
import type { Cat } from "@/entities/cat/model/types";

const KEY = "favorites";

const read = (): Cat[] => {
    try {
        return JSON.parse(localStorage.getItem(KEY) ?? "[]");
    } catch {
        return [];
    }
};

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<Cat[]>(read);

    const toggle = (cat: Cat) => {
        const next = favorites.some((c) => c.id === cat.id)
            ? favorites.filter((c) => c.id !== cat.id)
            : [...favorites, cat];

        localStorage.setItem(KEY, JSON.stringify(next));
        setFavorites(next);
    };

    return { favorites, toggle };
};
