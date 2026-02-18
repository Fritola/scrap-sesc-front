import React, { useEffect, useState } from 'react';
import { fetchMenu } from '../services/api';
import type { SescMenuResponse } from '../services/api';
import { DayCard } from './DayCard';
import { Loader2 } from 'lucide-react';
import '../styles/menudisplay.css';

interface MenuDisplayProps {
    unitySlug: string;
}

export const MenuDisplay: React.FC<MenuDisplayProps> = ({ unitySlug }) => {
    const [data, setData] = useState<SescMenuResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadMenu = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetchMenu(unitySlug);
                setData(response);
            } catch (err) {
                setError('Failed to load menu. Please try again.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (unitySlug) {
            loadMenu();
        }
    }, [unitySlug]);

    if (loading) {
        return (
            <div className="loading-container">
                <Loader2 className="spinner" size={48} />
                <p>Loading tasty options...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p>{error}</p>
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className="menu-display">
            <h2 className="unity-title">{data.data.unidade}</h2>
            <div className="cards-grid">
                {Object.entries(data.data.dias).map(([day, menu]) => (
                    <DayCard key={day} day={day} menu={menu} />
                ))}
            </div>
        </div>
    );
};
