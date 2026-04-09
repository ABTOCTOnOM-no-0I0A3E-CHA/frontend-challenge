import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Cat } from "@/entities/cat/model/types";

interface FavoritesState {
    favorites: Cat[];
    toggle: (cat: Cat) => void;
}

export const useFavorites = create<FavoritesState>()(
    persist(
        (set) => ({
            favorites: [],
            toggle: (cat) =>
                set((state) => {
                    const isFavorite = state.favorites.some(
                        (c) => c.id === cat.id,
                    );
                    const next = isFavorite
                        ? state.favorites.filter((c) => c.id !== cat.id)
                        : [...state.favorites, cat];

                    return { favorites: next };
                }),
        }),
        {
            name: "favorites",
        },
    ),
);
