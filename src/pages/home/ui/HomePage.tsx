import { useCats } from "@/entities/cat/model/useCats";
import { useFavorites } from "@/entities/favorites/model/useFavorites";
import { CatCard } from "@/shared/ui/CatCard/CatCard";
import styles from "./HomePage.module.css";

const CARDS_COUNT = 10;

export function HomePage() {
    const { cats, isLoading, error } = useCats();
    const { favorites, toggle } = useFavorites();

    return (
        <main>
            <section>
                <div className={styles.grid}>
                    {isLoading &&
                        Array.from({ length: CARDS_COUNT }).map((_, i) => (
                            <div key={i} className={styles.skeleton} />
                        ))}

                    {error && (
                        <p className={styles.error}>
                            ...не получилось загрузить котиков: {error}...
                        </p>
                    )}

                    {cats.map((cat) => (
                        <CatCard
                            key={cat.id}
                            cat={cat}
                            isFavorite={favorites.some((c) => c.id === cat.id)}
                            onFavoriteClick={toggle}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
