import { useMemo } from 'react';
import { LEVELS, Level } from '../features/levels/levels';
import { UD01_LEVELS } from '../features/levels/ud01';
import { UD02_LEVELS } from '../features/levels/ud02';
import { SANDBOX_LEVEL } from '../features/levels/sandbox';

interface LevelsSidebarProps {
  onSelectLevel?: (level: Level) => void;
  completedLevels?: Record<string, boolean>;
}

export function LevelsSidebar({ onSelectLevel, completedLevels = {} }: LevelsSidebarProps) {
  const allLevels = useMemo(() => [...UD01_LEVELS, ...UD02_LEVELS, SANDBOX_LEVEL, ...LEVELS], []);

  return (
    <div className="levels-sidebar">
      <div className="panel-header">
        <h2>Temario y Niveles</h2>
      </div>

      <div className="curriculum-section">
        <h3 className="section-title">📚 UD01: Fundamentos</h3>
        <ul className="levels-list">
          {UD01_LEVELS.map((lvl, idx) => (
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
      </div>

      <div className="curriculum-section">
        <h3 className="section-title">🗂️ UD02: Arrays</h3>
        <ul className="levels-list">
          {UD02_LEVELS.map((lvl, idx) => (
            <li key={lvl.id}>
              <button
                className={`btn btn-outline level-item ${completedLevels[lvl.id] ? 'completed' : ''}`}
                onClick={() => onSelectLevel && onSelectLevel(lvl)}
              >
                <span className="level-number">Nivel {UD01_LEVELS.length + idx + 1}</span>
                <span className="level-title">{lvl.title}</span>
                {completedLevels[lvl.id] && <span className="level-check">✓</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="curriculum-section">
        <h3 className="section-title">🧪 Zona Libre</h3>
        <ul className="levels-list">
          <li key={SANDBOX_LEVEL.id}>
            <button
              className={`btn btn-outline level-item sandbox-level`}
              onClick={() => onSelectLevel && onSelectLevel(SANDBOX_LEVEL)}
            >
              <span className="level-title">{SANDBOX_LEVEL.title}</span>
            </button>
          </li>
        </ul>
      </div>
      
      {LEVELS.length > 0 && (
        <div className="curriculum-section">
          <h3 className="section-title">⚙️ Niveles Antiguos</h3>
          <ul className="levels-list">
            {LEVELS.map((lvl) => (
              <li key={lvl.id}>
                <button
                  className={`btn btn-outline level-item ${completedLevels[lvl.id] ? 'completed' : ''}`}
                  onClick={() => onSelectLevel && onSelectLevel(lvl)}
                >
                  <span className="level-title">{lvl.title}</span>
                  {completedLevels[lvl.id] && <span className="level-check">✓</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}