import { useFavorites } from "@/entities/favorites/model/useFavorites";
import { CatCard } from "@/shared/ui/CatCard/CatCard";
import styles from "./FavoritesPage.module.css";

export function FavoritesPage() {
    const { favorites, toggle } = useFavorites();

    if (favorites.length === 0) {
        return <p className={styles.empty}>...тут пока пусто...</p>;
    }

    return (
        <div className={styles.grid}>
            {favorites.map((cat) => (
                <CatCard
                    key={cat.id}
                    cat={cat}
                    isFavorite
                    onFavoriteClick={toggle}
                />
            ))}
        </div>
    );
}
