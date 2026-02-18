export interface DailyMenu {
  base: string;
  carne: string;
  salada: string;
  guarnicao: string;
  vegetariana: string;
  sobremesa?: string;
  fruta?: string;
}

export interface DayMenu {
  day: string;
  menu: DailyMenu;
}

export type SemanalMenu = DayMenu[];

export interface SescMenuResponse {
  id: number;
  unit: string;
  slug: string;
  data: {
    dias: SemanalMenu;
    slug: string;
    unidade: string;
  };
  updatedAt: string;
}

const API_BASE_URL = 'https://scrap-sesc.onrender.com';
// const API_BASE_URL = "http://localhost:3000";

export const fetchMenu = async (
  unitySlug: string,
): Promise<SescMenuResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/menu/${unitySlug}`);

    if (!response.ok) {
      throw new Error(`Error fetching menu: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch menu:", error);
    throw error;
  }
};
