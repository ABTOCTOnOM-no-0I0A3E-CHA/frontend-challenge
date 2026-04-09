import { useEffect, useRef } from "react";
import { useCats } from "@/entities/cat/model/useCats";
import { useFavorites } from "@/entities/favorites/model/useFavorites";
import { CatCard } from "@/shared/ui/CatCard/CatCard";
import styles from "./HomePage.module.css";

const SKELETON_COUNT = 10;

export function HomePage() {
    const { cats, isLoading, error, loadMore } = useCats();
    const { favorites, toggle } = useFavorites();
    const sentinelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isLoading) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) loadMore();
        });

        if (sentinelRef.current) observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, [isLoading]);

    return (
        <main>
            <section className="max-w-[1440px] mx-auto">
                <div className={styles.grid}>
                    {cats.map((cat) => (
                        <CatCard
                            key={cat.id}
                            cat={cat}
                            isFavorite={favorites.some((c) => c.id === cat.id)}
                            onFavoriteClick={toggle}
                        />
                    ))}

                    {isLoading &&
                        Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                            <div
                                key={`skeleton-${i}`}
                                className={styles.skeleton}
                            />
                        ))}
                </div>

                {error && (
                    <p className={styles.error}>
                        ...не получилось загрузить котиков: {error}...
                    </p>
                )}
                <p className={styles.loadMore}>...загружаем еще котиков...</p>
                <div ref={sentinelRef} />
            </section>
        </main>
    );
}
