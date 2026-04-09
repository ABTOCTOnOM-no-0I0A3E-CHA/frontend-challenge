import { useEffect, useState } from "react";
import { searchCats } from "../api/catApi";
import type { Cat } from "./types";

interface UseCatsResult {
    cats: Cat[];
    isLoading: boolean;
    error: string | null;
}

export const useCats = (): UseCatsResult => {
    const [cats, setCats] = useState<Cat[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        searchCats()
            .then(setCats)
            .catch((err: unknown) => {
                setError(err instanceof Error ? err.message : "Неизвестная ошибка");
            })
            .finally(() => setIsLoading(false));
    }, []);

    return { cats, isLoading, error };
};
