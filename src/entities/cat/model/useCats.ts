import { useEffect, useRef, useState } from "react";
import { searchCats } from "../api/catApi";
import type { Cat } from "./types";

export const useCats = () => {
    const [cats, setCats] = useState<Cat[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const busyRef = useRef(false);

    const loadMore = () => {
        if (busyRef.current) return;
        busyRef.current = true;
        setIsLoading(true);

        searchCats()
            .then((more) => setCats((prev) => [...prev, ...more]))
            .catch((err: unknown) => {
                setError(
                    err instanceof Error ? err.message : "Неизвестная ошибка",
                );
            })
            .finally(() => {
                busyRef.current = false;
                setIsLoading(false);
            });
    };

    useEffect(() => {
        loadMore();
    }, []);

    return { cats, isLoading, error, loadMore };
};
