import { useMemo } from 'react';
import { LEVELS, Level } from '../features/levels/levels';

interface LevelsSidebarProps {
  onSelectLevel?: (level: Level) => void;
}

export function LevelsSidebar({ onSelectLevel }: LevelsSidebarProps) {
  const levels = useMemo(() => LEVELS, []);

  return (
    <div className="levels-sidebar">
      <div className="panel-header">
        <h2>Temario y Niveles</h2>
      </div>
      <ul className="levels-list">
        {levels.map((lvl) => (
          <li key={lvl.id}>
            <button
              className="btn btn-outline"
              onClick={() => onSelectLevel && onSelectLevel(lvl)}
            >
              {lvl.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="sidebar-note">
        <p>
          Selecciona un nivel para cargar su descripción y consejos didácticos. Próximamente:
          carga de bloques iniciales y pruebas automáticas.
        </p>
      </div>
    </div>
  );
}
