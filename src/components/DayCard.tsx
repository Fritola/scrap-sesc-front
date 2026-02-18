import React from 'react';
import type { DailyMenu } from '../services/api';
import '../styles/daycard.css';

interface DayCardProps {
    day: string;
    menu: DailyMenu;
}

export const DayCard: React.FC<DayCardProps> = ({ day, menu }) => {
    return (
        <div className="day-card">
            <h3 className="day-title">{day}</h3>
            <div className="menu-items">
                <MenuItem label="Base" value={menu.base} />
                <MenuItem label="Carne" value={menu.carne} />
                <MenuItem label="Salada" value={menu.salada} />
                <MenuItem label="Guarnição" value={menu.guarnicao} />
                <MenuItem label="Vegetariana" value={menu.vegetariana} />
                {menu.sobremesa && <MenuItem label="Sobremesa" value={menu.sobremesa} />}
                {menu.fruta && <MenuItem label="Fruta" value={menu.fruta} />}
            </div>
        </div>
    );
};

const MenuItem: React.FC<{ label: string; value: string }> = ({ label, value }) => {
    if (!value) return null;
    return (
        <div className="menu-item">
            <span className="item-label">{label}</span>
            <span className="item-value">{value}</span>
        </div>
    );
};
