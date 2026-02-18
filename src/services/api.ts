
export interface DailyMenu {
    base: string;
    carne: string;
    salada: string;
    guarnicao: string;
    vegetariana: string;
    sobremesa?: string;
    fruta?: string;
}

export interface SemanalMenu {
    [day: string]: DailyMenu;
}

export interface SescMenuResponse {
    data: {
        dias: SemanalMenu;
        slug: string;
        unidade: string;
    };
}

const API_BASE_URL = 'https://scrap-sesc.onrender.com';

export const fetchMenu = async (unitySlug: string): Promise<SescMenuResponse> => {
    try {
        const response = await fetch(`${API_BASE_URL}/menu/${unitySlug}`);

        if (!response.ok) {
            throw new Error(`Error fetching menu: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch menu:', error);
        throw error;
    }
};
