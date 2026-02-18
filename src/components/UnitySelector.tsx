import React from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/selector.css';

interface UnitySelectorProps {
    onSelect: (unitySlug: string) => void;
    selectedSlug: string;
}

const UNITIES = [
    { slug: 'sesc-24-de-maio', name: 'Sesc 24 de Maio' },
    { slug: 'sesc-casa-verde', name: 'Sesc Casa Verde' },
    // { slug: 'sesc-pinheiros', name: 'Sesc Pinheiros' },
];

export const UnitySelector: React.FC<UnitySelectorProps> = ({ onSelect, selectedSlug }) => {
    return (
        <div className="selector-container">
            <label htmlFor="unity-select" className="selector-label">
                Select Unit
            </label>
            <div className="select-wrapper">
                <select
                    id="unity-select"
                    value={selectedSlug}
                    onChange={(e) => onSelect(e.target.value)}
                    className="unity-select"
                >
                    {UNITIES.map((unity) => (
                        <option key={unity.slug} value={unity.slug}>
                            {unity.name}
                        </option>
                    ))}
                </select>
                <ChevronDown className="select-icon" size={20} />
            </div>
        </div>
    );
};
