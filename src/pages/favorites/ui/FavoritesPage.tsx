import { useState } from "react";
import { useFavorites } from "@/entities/favorites/model/useFavorites";
import { CatCard } from "@/shared/ui/CatCard/CatCard";
import type { Cat } from "@/entities/cat/model/types";
import styles from "./FavoritesPage.module.css";

export function FavoritesPage() {
    const { favorites, toggle } = useFavorites();
    const [pending, setPending] = useState<Record<string, number>>({});

    // Если читаете, здесь сделана защита от случайного удаления

    const removePending = (id: string) => {
        const next = { ...pending };
        delete next[id];
        setPending(next);
    };

    const handleClick = (cat: Cat) => {
        if (pending[cat.id]) {
            clearTimeout(pending[cat.id]);
            removePending(cat.id);
            return;
        }

        const timeoutId = window.setTimeout(() => {
            toggle(cat);
            removePending(cat.id);
        }, 2000);

        setPending({ ...pending, [cat.id]: timeoutId });
    };

    if (favorites.length === 0) {
        return <p className={styles.empty}>...тут пока пусто...</p>;
    }

    return (
        <div className={styles.grid}>
            {favorites.map((cat) => (
                <CatCard
                    key={cat.id}
                    cat={cat}
                    isFavorite={!pending[cat.id]}
                    isPending={Boolean(pending[cat.id])}
                    onFavoriteClick={handleClick}
                />
            ))}
        </div>
    );
}
