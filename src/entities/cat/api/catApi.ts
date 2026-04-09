import type { Cat } from "../model/types";

const API_BASE_URL = "https://api.thecatapi.com/v1";

export const searchCats = async (): Promise<Cat[]> => {
    const response = await fetch(`${API_BASE_URL}/images/search?limit=10`);

    if (!response.ok) {
        throw new Error(`Ошибка ${response.status}`);
    }

    return response.json();
};
