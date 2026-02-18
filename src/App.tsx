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
            <h1>Sesc Menu Viewer</h1>
          </div>
          <p className="subtitle">Discover daily delights at your favorite unit</p>
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
          <p>© {new Date().getFullYear()} Sesc Menu Viewer. Not affiliated with Sesc.</p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
