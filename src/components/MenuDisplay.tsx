import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import React from 'react';
import type { SescMenuResponse } from '../services/api';
import { fetchMenu } from '../services/api';
import '../styles/menudisplay.css';
import { DayCard } from './DayCard';

interface MenuDisplayProps {
  unitySlug: string;
}

export const MenuDisplay: React.FC<MenuDisplayProps> = ({ unitySlug }) => {
  const { data, isLoading, error } = useQuery<SescMenuResponse>({
    queryKey: ['menu', unitySlug],
    queryFn: () => fetchMenu(unitySlug),
    enabled: !!unitySlug,
  });

  if (isLoading) {
    return (
      <div className="loading-container">
        <Loader2 className="spinner" size={48} />
        <p>Carregando opções deliciosas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Erro ao carregar cardápio. Tente novamente.</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="menu-display">
      <h2 className="unity-title">{data.unit}</h2>
      <div className="cards-grid">
        {data.data.dias.map(({ day, menu, dayNumber }) => (
          <DayCard key={day} day={`${day} - ${dayNumber}`} menu={menu} />
        ))}
      </div>
    </div>
  );
};
