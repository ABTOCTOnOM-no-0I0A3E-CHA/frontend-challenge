import { OutlinedHeart } from "@/shared/assets/OutlinedHeart";
import { FilledHeart } from "@/shared/assets/FilledHeart";
import type { Cat } from "@/entities/cat/model/types";
import styles from "./CatCard.module.css";

interface CatCardProps {
    cat: Cat;
    isFavorite: boolean;
    isPending?: boolean;
    onFavoriteClick: (cat: Cat) => void;
}

export const CatCard = ({
    cat,
    isFavorite,
    isPending = false,
    onFavoriteClick,
}: CatCardProps) => {
    const btnClass = [
        styles.favoriteBtn,
        isFavorite && styles.favoriteBtnActive,
        isPending && styles.favoriteBtnPending,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={styles.card}>
            <img
                src={cat.url}
                alt="cat"
                loading="lazy"
                className={styles.image}
            />
            <div className={styles.gradient} />
            <button className={btnClass} onClick={() => onFavoriteClick(cat)}>
                <div className={styles.favoriteBtnWrapper}>
                    <OutlinedHeart className={styles.outlinedHeartIcon} />
                    <FilledHeart className={styles.filledHeartIcon} />
                </div>
            </button>
        </div>
    );
};
