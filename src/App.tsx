import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UtensilsCrossed } from 'lucide-react';
import { useState } from 'react';
import './App.css';
import { MenuDisplay } from './components/MenuDisplay';
import { UnitySelector } from './components/UnitySelector';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [selectedUnity, setSelectedUnity] = useState<string>('sesc-24-de-maio');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <header className="app-header">
          <div className="logo-container">
            <UtensilsCrossed className="logo-icon" size={32} />
            <h1>Menu do Sesquinho</h1>
          </div>
          <p className="subtitle">Descubra o cardápio semanal na unidade que você deseja</p>
          <p className="subtitle">Atualizado semanalmente de acordo com as informações do SESC</p>
        </header>

        <main className="main-content">
          <section className="controls-section">
            <UnitySelector
              selectedSlug={selectedUnity}
              onSelect={setSelectedUnity}
            />
          </section>

          <section className="menu-section">
            <MenuDisplay unitySlug={selectedUnity} />
          </section>
        </main>

        <footer className="app-footer">
          <p>© {new Date().getFullYear()} Menu Sesquinho. Não temos relação com o SESC.</p>
          <p>Desenvolvido por Gustavo Fritola</p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
