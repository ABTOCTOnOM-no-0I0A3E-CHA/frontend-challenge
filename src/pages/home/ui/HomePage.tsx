import { useCats } from "@/entities/cat/model/useCats";
import { Heart } from "@/shared/assets/Heart";
import styles from "./HomePage.module.css";

const CARDS_COUNT = 5;

export function HomePage() {
    const { cats, isLoading, error } = useCats();

    return (
        <main>
            <section>
                <div className={styles.grid}>
                    {isLoading &&
                        Array.from({ length: CARDS_COUNT }).map((_, index) => (
                            <div
                                key={`skeleton-${index}`}
                                className={styles.skeleton}
                            />
                        ))}

                    {!isLoading && error && (
                        <p className={styles.error}>
                            ...не получилось загрузить котиков: {error}...
                        </p>
                    )}

                    {!isLoading &&
                        !error &&
                        cats.map((cat) => (
                            <div key={cat.id} className={styles.card}>
                                <img
                                    src={cat.url}
                                    alt="cat"
                                    loading="lazy"
                                    className={styles.image}
                                />
                                <div className={styles.gradient} />
                                <button className={styles.favoriteBtn}>
                                    <Heart className={styles.heartIcon} />
                                </button>
                            </div>
                        ))}
                </div>
                <p className={styles.loadMore}>...загружаем еще котиков...</p>
            </section>
        </main>
    );
}
