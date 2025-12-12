import { useMemo } from 'react';
import { LEVELS, Level } from '../features/levels/levels';
import { UD01_LEVELS } from '../features/levels/ud01';

interface LevelsSidebarProps {
  onSelectLevel?: (level: Level) => void;
}

interface LevelsSidebarProps {
  onSelectLevel?: (level: Level) => void;
  completedLevels?: Record<string, boolean>;
}

export function LevelsSidebar({ onSelectLevel, completedLevels = {} }: LevelsSidebarProps) {
  const levels = useMemo(() => [...UD01_LEVELS, ...LEVELS], []);

  return (
    <div className="levels-sidebar">
      <div className="panel-header">
        <h2>Temario y Niveles</h2>
      </div>
      <ul className="levels-list">
        {levels.map((lvl, idx) => (
          <li key={lvl.id}>
            <button
              className={`btn btn-outline level-item ${completedLevels[lvl.id] ? 'completed' : ''}`}
              onClick={() => onSelectLevel && onSelectLevel(lvl)}
            >
              <span className="level-number">Nivel {idx + 1}</span>
              <span className="level-title">{lvl.title}</span>
              {completedLevels[lvl.id] && <span className="level-check">✓</span>}
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
